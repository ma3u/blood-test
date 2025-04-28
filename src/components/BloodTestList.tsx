
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import TestDateDisplay from "./TestDateDisplay";

interface BloodTest {
  id: string;
  test_date: string;
  test_values: Record<string, string>;
}

export default function BloodTestList() {
  const [tests, setTests] = useState<BloodTest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTests = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session?.session?.user) {
        const { data, error } = await supabase
          .from('blood_tests')
          .select('*')
          .eq('user_id', session.session.user.id)
          .order('test_date', { ascending: false });

        if (!error && data) {
          setTests(data);
        }
      }
      setLoading(false);
    };

    fetchTests();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Previous Tests</h2>
      {tests.length === 0 ? (
        <p className="text-gray-500">No test results found.</p>
      ) : (
        <div className="space-y-4">
          {tests.map((test) => (
            <div key={test.id} className="border p-4 rounded-lg">
              <TestDateDisplay date={new Date(test.test_date)} />
              <div className="mt-2 grid grid-cols-2 gap-2">
                {Object.entries(test.test_values).map(([key, value]) => (
                  <div key={key} className="text-sm">
                    <span className="font-medium">{key}:</span> {value}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4">View Details</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
