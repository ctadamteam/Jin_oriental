export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      site_settings: {
        Row: {
          id: string
          created_at: string
          // ... fields
        }
        Insert: {
          id?: string
          created_at?: string
        }
        Update: {
          id?: string
          created_at?: string
        }
      }
      // TODO: Define other tables when schema is finalized
    }
  }
}
