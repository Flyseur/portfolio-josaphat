"use client";

import { useState } from "react";
import { useRunFlow } from "@genkit-ai/next/client";
import { analyzePortfolioAndSuggest } from "@/ai/flows/portfolio-design-suggestions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AiAnalyzerSection() {
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const { toast } = useToast();
  const { run, data: suggestions, error, running } = useRunFlow(
    analyzePortfolioAndSuggest,
    {
      onError: (err) => {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: err.message,
        });
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!portfolioUrl.trim()) return;
    run({ portfolioUrl });
  };

  return (
    <section id="ai-analyzer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            AI Portfolio Analyzer
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Get AI-powered design suggestions for any developer portfolio.
          </p>
        </div>

        <Card className="mt-12 mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Wand2 className="text-primary" />
              Analyze a Portfolio
            </CardTitle>
            <CardDescription>
              Enter a URL to get instant feedback based on current design trends.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="url"
                placeholder="https://example-portfolio.com"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                disabled={running}
                required
              />
              <Button type="submit" disabled={running} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {running ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get Suggestions
                  </>
                )}
              </Button>
            </form>

            {suggestions && (
              <Alert className="mt-6 bg-secondary">
                <Sparkles className="h-4 w-4" />
                <AlertTitle className="font-headline">Suggestions</AlertTitle>
                <AlertDescription className="mt-2 whitespace-pre-wrap font-body text-secondary-foreground">
                  {suggestions.suggestions}
                </AlertDescription>
              </Alert>
            )}
            {error && !running && (
               <Alert variant="destructive" className="mt-6">
                  <AlertTitle>Analysis Failed</AlertTitle>
                  <AlertDescription>
                    Could not analyze the portfolio. Please check the URL and try again.
                  </AlertDescription>
                </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
