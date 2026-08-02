# Analyze Your Private YouTube Channel Data

This local tool retrieves private, read-only analytics for the YouTube channel
that you authorize. It creates a Markdown data report you can share with an AI
assistant for evidence-based content and publishing recommendations.

It does not upload content, change your channel, call an AI service, or request
revenue access.

## Google Cloud setup

1. Create a project in [Google Cloud](https://console.cloud.google.com/).
2. In **APIs & Services → Library**, enable **YouTube Analytics API** and
   **YouTube Data API v3**.
3. Configure the OAuth consent screen. If it is in Testing mode, add the Google
   account that owns your channel as a test user.
4. In **APIs & Services → Credentials**, create an OAuth client of type
   **Desktop app** and download its JSON file to a private local path.

The command requests only these read-only scopes:

```text
https://www.googleapis.com/auth/yt-analytics.readonly
https://www.googleapis.com/auth/youtube.readonly
```

## Generate a report

From the project root, run:

```bash
yarn youtube:report -- --client-secrets /private/path/client_secret.json
```

The first run opens Google's authorization page. After you approve it, the
command collects the previous 90 complete UTC days by default and writes:

```text
reports/youtube/<timestamp>/channel-data.md
reports/youtube/<timestamp>/channel-data.json
```

Use `--days 30` for a different rolling period, or provide both
`--start-date YYYY-MM-DD` and `--end-date YYYY-MM-DD` for a fixed inclusive
range.

```bash
yarn youtube:report -- --client-secrets /private/path/client_secret.json --days 30
```

## Keep data private

The default token file is `.youtube-analytics/token.json`; it contains a
refresh token and is ignored by Git. Do not commit `client_secret.json`, the
token file, or any `channel-data.json` report. Do not share either OAuth file
with an AI assistant or anyone else.

## Ask an AI to analyze the report

Share only `channel-data.md` and request recommendations grounded in its date
range, daily trends, top videos, traffic sources, countries, and device mix.
Useful prompts include:

- Which video topics or formats should I repeat, stop, or test next?
- Which titles or packages should I improve first?
- What posting cadence is supported by this period's data?
- Which traffic-source or audience patterns deserve a focused experiment?

YouTube Analytics can lag behind the current day, so use complete periods when
comparing performance.
