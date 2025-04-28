
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface BloodTestListProps {
  userId: string;
}

interface BloodTest {
  id: string;
  test_date: string;
  test_values: Record<string, string>;
}

export default function BloodTestList({ userId }: BloodTestListProps) {
  const [tests, setTests] = useState<BloodTest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTests();
  }, [userId]);

  const fetchTests = async () => {
    try {
      const { data, error } = await supabase
        .from("blood_tests")
        .select("*")
        .eq("user_id", userId)
        .order("test_date", { ascending: false });

      if (error) throw error;
      setTests(data || []);
    } catch (error) {
      console.error("Error fetching blood tests:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {tests.length === 0 ? (
        <p>No blood tests recorded yet.</p>
      ) : (
        tests.map((test) => (
          <div
            key={test.id}
            className="border rounded-lg p-4 hover:bg-gray-50"
          >
            <p className="font-medium">
              Date: {format(new Date(test.test_date), "PPP")}
            </p>
            <div className="mt-2 space-y-1">
              {Object.entries(test.test_values).map(([key, value]) => (
                <p key={key} className="text-sm">
                  <span className="font-medium">{key}:</span> {value}
                </p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
