'use server';

/**
 * @fileOverview An AI agent for analyzing developer portfolios and providing design suggestions.
 *
 * - analyzePortfolioAndSuggest - A function that analyzes a portfolio and suggests design improvements.
 * - AnalyzePortfolioInput - The input type for the analyzePortfolioAndSuggest function.
 * - AnalyzePortfolioOutput - The return type for the analyzePortfolioAndSuggest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePortfolioInputSchema = z.object({
  portfolioUrl: z.string().describe('The URL of the developer portfolio to analyze.'),
});
export type AnalyzePortfolioInput = z.infer<typeof AnalyzePortfolioInputSchema>;

const AnalyzePortfolioOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'Design suggestions for improving the portfolio based on identified patterns and current trends.'
    ),
});
export type AnalyzePortfolioOutput = z.infer<typeof AnalyzePortfolioOutputSchema>;

export async function analyzePortfolioAndSuggest(
  input: AnalyzePortfolioInput
): Promise<AnalyzePortfolioOutput> {
  return analyzePortfolioAndSuggestFlow(input);
}

const analyzePortfolioPrompt = ai.definePrompt({
  name: 'analyzePortfolioPrompt',
  input: {schema: AnalyzePortfolioInputSchema},
  output: {schema: AnalyzePortfolioOutputSchema},
  prompt: `You are a design expert specializing in modern web portfolios.

Analyze the provided developer portfolio and provide actionable design suggestions based on current trends and identified patterns that would improve the portfolio and make it more attractive and effective. Focus on UI/UX improvements.

Portfolio URL: {{{portfolioUrl}}}`,
});

const analyzePortfolioAndSuggestFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioAndSuggestFlow',
    inputSchema: AnalyzePortfolioInputSchema,
    outputSchema: AnalyzePortfolioOutputSchema,
  },
  async input => {
    const {output} = await analyzePortfolioPrompt(input);
    return output!;
  }
);
