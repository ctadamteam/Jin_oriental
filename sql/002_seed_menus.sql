-- Seed menus
INSERT INTO menus (id, title, href) VALUES
  (uuid_generate_v4(), '진한의원 소개', '/about'),
  (uuid_generate_v4(), '진 다이어트 한약', '/diet-medicine');
-- ... more seeds can be added later
