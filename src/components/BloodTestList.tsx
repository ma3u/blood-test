
import { useEffect, useState } from "react";
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
    // Use localStorage instead of Supabase until we set up tables
    const fetchTests = () => {
      const allTests: BloodTest[] = [];
      // Find all keys in localStorage that start with blood_test_
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('blood_test_')) {
          const item = localStorage.getItem(key);
          if (item) {
            const test = JSON.parse(item);
            allTests.push({
              id: key,
              test_date: test.test_date,
              test_values: test.test_values
            });
          }
        }
      }
      setTests(allTests.sort((a, b) => new Date(b.test_date).getTime() - new Date(a.test_date).getTime()));
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
