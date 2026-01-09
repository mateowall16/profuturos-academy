import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();

  // ⏳ Aguarda auth + profile
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  // 🔐 Não logado → login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🧠 Usuário logado, mas profile ainda não carregou
  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Carregando perfil...</p>
        </div>
      </div>
    );
  }

  // 🚫 Logado, mas sem acesso → checkout
  if (!profile.has_access) {
    return <Navigate to="/checkout" replace />;
  }

  // ✅ Logado e com acesso
  return <>{children}</>;
};

export default ProtectedRoute;
