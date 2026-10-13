'use client';

import { useEffect, useRef, type RefObject } from 'react';

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const activeOverlays: HTMLElement[] = [];
const inertLocks = new Map<HTMLElement, { count: number; original: boolean }>();
let savedBodyOverflow = '';

/** Keeps a visible overlay reachable while temporarily excluding the background. */
export function useAccessibleOverlay(open: boolean, containerRef: RefObject<HTMLElement | null>, onClose: () => void) {
  const closeRef = useRef(onClose);
  useEffect(() => { closeRef.current = onClose; }, [onClose]);

  useEffect(() => {
    const container = containerRef.current;
    if (!open || !container) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (activeOverlays.length === 0) savedBodyOverflow = document.body.style.overflow;
    activeOverlays.push(container);
    const inertElements: HTMLElement[] = [];
    let ancestor: HTMLElement | null = container;
    while (ancestor && ancestor !== document.body) {
      const parent: HTMLElement | null = ancestor.parentElement;
      if (!parent) break;
      for (const sibling of Array.from(parent.children)) {
        if (sibling instanceof HTMLElement && sibling !== ancestor && !['SCRIPT', 'STYLE', 'LINK'].includes(sibling.tagName)) {
          const lock = inertLocks.get(sibling) || { count: 0, original: sibling.inert };
          lock.count += 1;
          inertLocks.set(sibling, lock);
          inertElements.push(sibling);
          sibling.inert = true;
        }
      }
      ancestor = parent;
    }
    document.body.style.overflow = 'hidden';

    const focusable = () => Array.from(container.querySelectorAll<HTMLElement>(focusableSelector))
      .filter((element) => element.getClientRects().length > 0 && !element.closest('[inert]'));
    const first = () => container.querySelector<HTMLElement>('[data-autofocus]') || focusable()[0] || container;
    const frame = requestAnimationFrame(() => first().focus({ preventScroll: true }));

    const onKeyDown = (event: KeyboardEvent) => {
      if (activeOverlays[activeOverlays.length - 1] !== container) return;
      if (event.key === 'Escape' && !event.isComposing) {
        event.preventDefault();
        closeRef.current();
      }
      if (event.key !== 'Tab') return;
      const controls = focusable();
      const start = controls[0];
      const end = controls[controls.length - 1];
      if (!start) {
        event.preventDefault();
        container.focus();
      } else if (event.shiftKey && (document.activeElement === start || !container.contains(document.activeElement))) {
        event.preventDefault();
        end.focus();
      } else if (!event.shiftKey && (document.activeElement === end || !container.contains(document.activeElement))) {
        event.preventDefault();
        start.focus();
      }
    };
    const onFocusIn = (event: FocusEvent) => {
      if (activeOverlays[activeOverlays.length - 1] !== container) return;
      if (event.target instanceof Node && !container.contains(event.target)) first().focus({ preventScroll: true });
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('focusin', onFocusIn);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focusin', onFocusIn);
      activeOverlays.splice(activeOverlays.indexOf(container), 1);
      inertElements.forEach((element) => {
        const lock = inertLocks.get(element);
        if (lock && --lock.count === 0) {
          element.inert = lock.original;
          inertLocks.delete(element);
        }
      });
      if (activeOverlays.length === 0) document.body.style.overflow = savedBodyOverflow;
      if (previousFocus?.isConnected && !previousFocus.closest('[inert]')) previousFocus.focus({ preventScroll: true });
    };
  }, [open, containerRef]);
}
