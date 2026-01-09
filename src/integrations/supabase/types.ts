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

      /* ================= OLD MODULES (LEGADO) ================= */
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

      /* ================= OLD USER_PROGRESS (LEGADO) ================= */
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

      /* ================= COURSE MODULES (NOVO) ================= */
      course_modules: {
        Row: {
          id: number
          title: string
          type: "recorded" | "live"
          order_index: number
          created_at: string
        }
        Insert: {
          title: string
          type: "recorded" | "live"
          order_index: number
          created_at?: string
        }
        Update: {
          title?: string
          type?: "recorded" | "live"
          order_index?: number
          created_at?: string
        }
        Relationships: []
      }

      /* ================= LESSONS (NOVO) ================= */
      lessons: {
        Row: {
          id: number
          module_id: number
          title: string
          description: string | null
          video_url: string
          duration_seconds: number
          order_index: number
          created_at: string
        }
        Insert: {
          module_id: number
          title: string
          description?: string | null
          video_url: string
          duration_seconds: number
          order_index: number
          created_at?: string
        }
        Update: {
          module_id?: number
          title?: string
          description?: string | null
          video_url?: string
          duration_seconds?: number
          order_index?: number
          created_at?: string
        }
        Relationships: []
      }

      /* ================= LESSON DOCUMENTS (NOVO) ================= */
      lesson_documents: {
        Row: {
          id: number
          lesson_id: number
          title: string
          file_url: string
          type: "pdf" | "sheet" | "link"
          created_at: string
        }
        Insert: {
          lesson_id: number
          title: string
          file_url: string
          type: "pdf" | "sheet" | "link"
          created_at?: string
        }
        Update: {
          lesson_id?: number
          title?: string
          file_url?: string
          type?: "pdf" | "sheet" | "link"
          created_at?: string
        }
        Relationships: []
      }

      /* ================= LESSON PROGRESS (NOVO) ================= */
      lesson_progress: {
        Row: {
          id: number
          user_id: string
          lesson_id: number
          completed: boolean
          completed_at: string | null
        }
        Insert: {
          user_id: string
          lesson_id: number
          completed?: boolean
          completed_at?: string | null
        }
        Update: {
          user_id?: string
          lesson_id?: number
          completed?: boolean
          completed_at?: string | null
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
