export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      /* ================= PROFILES ================= */
      profiles: {
        Row: {
          id: string
          user_id: string
          full_name: string | null
          email: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          full_name?: string | null
          email?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string | null
          email?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }

      /* ================= MODULES ================= */
      modules: {
        Row: {
          id: number
          title: string
          description: string | null
          thumbnail: string | null
          video_url: string | null
          order_index: number
          is_free: boolean
          created_at: string
        }
        Insert: {
          title: string
          description?: string | null
          thumbnail?: string | null
          video_url?: string | null
          order_index: number
          is_free?: boolean
          created_at?: string
        }
        Update: {
          title?: string
          description?: string | null
          thumbnail?: string | null
          video_url?: string | null
          order_index?: number
          is_free?: boolean
          created_at?: string
        }
        Relationships: []
      }

      /* ================= USER_PROGRESS ================= */
      user_progress: {
        Row: {
          id: number
          user_id: string
          module_id: number
          completed: boolean
          created_at: string
        }
        Insert: {
          user_id: string
          module_id: number
          completed?: boolean
          created_at?: string
        }
        Update: {
          user_id?: string
          module_id?: number
          completed?: boolean
          created_at?: string
        }
        Relationships: []
      }
    }

    Views: {
      [_ in never]: never
    }

    Functions: {
      [_ in never]: never
    }

    Enums: {
      [_ in never]: never
    }

    CompositeTypes: {
      [_ in never]: never
    }
  }
}

/* ================= HELPERS (PADRÃO SUPABASE) ================= */

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">
type PublicSchema = DatabaseWithoutInternals["public"]

export type Tables<
  TableName extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
> = (PublicSchema["Tables"] & PublicSchema["Views"])[TableName] extends {
  Row: infer R
}
  ? R
  : never

export type TablesInsert<
  TableName extends keyof PublicSchema["Tables"]
> = PublicSchema["Tables"][TableName] extends {
  Insert: infer I
}
  ? I
  : never

export type TablesUpdate<
  TableName extends keyof PublicSchema["Tables"]
> = PublicSchema["Tables"][TableName] extends {
  Update: infer U
}
  ? U
  : never

export type Enums<
  EnumName extends keyof PublicSchema["Enums"]
> = PublicSchema["Enums"][EnumName]

export type CompositeTypes<
  CompositeTypeName extends keyof PublicSchema["CompositeTypes"]
> = PublicSchema["CompositeTypes"][CompositeTypeName]

export const Constants = {
  public: {
    Enums: {},
  },
} as const
