import React from 'react';
import { Linkedin, Github, FileText, Globe, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Rahul Saini</CardTitle>
            <CardDescription>Developer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-2" />
              <a href="mailto:johndoe@example.com" className="hover:underline">rahul545436@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button variant="outline" className="flex items-center justify-center">
                <Linkedin className="mr-2" />
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <Github className="mr-2" />
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <FileText className="mr-2" />
                <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <Globe className="mr-2" />
                <a href="https://www.johndoe-portfolio.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Feel free to reach out for any inquiries or collaborations!</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;