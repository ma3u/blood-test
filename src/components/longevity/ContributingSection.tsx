
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContributingSection: React.FC = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4" id="contributing">Contributing</h2>
      <p className="mb-6">
        We welcome contributions from users, health experts, and developers to help improve this platform.
        Your knowledge and expertise can help others on their journey to better health and longevity.
      </p>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="mb-4 w-full md:w-auto">
          <TabsTrigger value="users">For Users</TabsTrigger>
          <TabsTrigger value="experts">For Health Experts</TabsTrigger>
          <TabsTrigger value="developers">For Developers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>How Users Can Contribute</CardTitle>
              <CardDescription>Share your experiences and feedback to improve the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>As a user, your feedback is invaluable. Here are ways you can contribute:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submit feedback about the user interface and experience</li>
                <li>Report bugs or issues you encounter while using the application</li>
                <li>Suggest new features or improvements to existing ones</li>
                <li>Share your personal health journey and results (anonymously if preferred)</li>
                <li>Help with translations if you're fluent in multiple languages</li>
              </ul>
              <p className="mt-4">
                To contribute, you can open an issue on our GitHub repository or reach out through the contact form.
              </p>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => window.open("https://github.com/ma3u/blood-test/issues/new/choose", "_blank", "noopener,noreferrer")}
                  className="mr-4"
                >
                  Open Issue on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experts">
          <Card>
            <CardHeader>
              <CardTitle>For Health Experts</CardTitle>
              <CardDescription>Share your knowledge and expertise</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>As a health professional, nutritionist, or researcher, your expertise can help enhance the accuracy and depth of our content:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Review and validate blood test reference ranges and recommendations</li>
                <li>Contribute research-backed content on health optimization and longevity</li>
                <li>Suggest improvements to our algorithms for health recommendations</li>
                <li>Share case studies (with proper anonymization and consent)</li>
                <li>Help develop specialized content for specific health conditions</li>
              </ul>
              <p className="mt-4">
                If you're interested in contributing as an expert, please reach out via GitHub or direct email with your credentials and area of expertise.
              </p>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => window.open("https://github.com/ma3u/blood-test/discussions", "_blank", "noopener,noreferrer")}
                >
                  Join the Discussion on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="developers">
          <Card>
            <CardHeader>
              <CardTitle>For Developers</CardTitle>
              <CardDescription>Technical contribution guidelines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>If you're a developer interested in contributing code to the project, here's how to get started:</p>
              
              <h3 className="text-lg font-semibold mt-4">Step 1: Fork and Clone</h3>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <code>
                  git clone https://github.com/ma3u/blood-test.git{"\n"}
                  cd blood-test{"\n"}
                  npm install
                </code>
              </pre>
              
              <h3 className="text-lg font-semibold mt-4">Step 2: Create a Branch</h3>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <code>
                  git checkout -b feature/your-feature-name
                </code>
              </pre>
              
              <h3 className="text-lg font-semibold mt-4">Step 3: Development Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Follow the existing code style and patterns</li>
                <li>Write tests for new features or bug fixes</li>
                <li>Document any new components or functionality</li>
                <li>Ensure all tests pass before submitting a pull request</li>
                <li>Keep pull requests focused on a single change/feature</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-4">Step 4: Submit a Pull Request</h3>
              <p>
                Once your changes are ready, push your branch to your fork and open a pull request against the main repository.
                Provide a clear description of the changes and reference any related issues.
              </p>

              <div className="mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => window.open("https://github.com/ma3u/blood-test", "_blank", "noopener,noreferrer")}
                  className="mr-4"
                >
                  View Repository
                </Button>
                <Button 
                  onClick={() => window.open("https://github.com/ma3u/blood-test/blob/main/CONTRIBUTING.md", "_blank", "noopener,noreferrer")}
                >
                  Read Full Contributing Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContributingSection;
