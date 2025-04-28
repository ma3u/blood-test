
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import BloodTestForm from "@/components/BloodTestForm";
import BloodTestList from "@/components/BloodTestList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/auth");
      else setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/auth");
      else setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (!session) return null;

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Blood Test Dashboard</h1>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Add New Blood Test</CardTitle>
          </CardHeader>
          <CardContent>
            {session?.user?.id && <BloodTestForm userId={session.user.id} />}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Blood Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <BloodTestList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
