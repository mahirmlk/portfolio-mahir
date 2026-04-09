import { NextResponse } from "next/server";
import {
  fetchContributions,
  getGitHubSetupError,
  fetchRecentCommitMessages,
  fetchRecentActivity,
} from "@/lib/github";

export async function GET() {
  try {
    const setupError = getGitHubSetupError();
    const [contributions, recentActivity] = await Promise.all([
      fetchContributions(),
      fetchRecentActivity(),
    ]);
    const commits = await fetchRecentCommitMessages();

    return NextResponse.json(
      {
        year: contributions?.year ?? new Date().getUTCFullYear(),
        totalContributions: contributions?.totalContributions ?? 0,
        weeks: contributions?.weeks ?? [],
        recentActivity,
        commits,
        fetchedAt: new Date().toISOString(),
        error: setupError ?? undefined,
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        year: new Date().getUTCFullYear(),
        totalContributions: 0,
        weeks: [],
        recentActivity: [],
        commits: [],
        fetchedAt: new Date().toISOString(),
        error: message,
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
