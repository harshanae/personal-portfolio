# create-instructions.ps1

Write-Host "Creating instruction files..."

$basePath = "frontend\.github\instructions"
New-Item -ItemType Directory -Force -Path $basePath | Out-Null

function Write-InstructionFile($name, $content) {
    $filePath = "$basePath\$name"
    Set-Content -Encoding UTF8 -Path $filePath -Value $content
    Write-Host "✅ Created $name"
}

Write-InstructionFile "00-convention-instructions.md" @"
# 00 - Convention Instructions

Purpose
A quick reference explaining the instructions folder and how to update files.

Conventions
- Files use numbered prefixes (00, 01, 02…) to preserve order.
- Keep content short and scan-friendly.
- No secrets or credentials here.

How to update
1. Modify appropriate file under .github/instructions/
2. Create a PR with a clear message (e.g., docs: updated CI instructions)
"@

Write-InstructionFile "domain.instructions.md" @"
# Domain: Frontend — Quick Domain Notes

Folders
- pages/
- components/
- hooks/
- lib/
- assets/

Responsibilities
- UI/UX rendering
- talking to backend via /api/chat
- never store secrets in frontend code
"@

Write-InstructionFile "01-frontend-instructions.md" @"
# 01 - Frontend Instructions

- React + Vite + TypeScript + Tailwind
- Components stay <200 lines
- Strong typing preferred over 'any'
- Error UI must show user-friendly feedback
"@

Write-InstructionFile "02-backend-integration.md" @"
# 02 - Backend Integration

Chat API
POST /api/chat
Request: { message, sessionId }
Response: { reply }

All API calls go through src/lib/api.ts
"@

Write-InstructionFile "03-ci-cd-instructions.md" @"
# 03 - CI/CD (Frontend)

Pipeline should run:
1. npm install
2. npm run lint
3. npm run typecheck
4. npm test
5. npm run build
"@

Write-InstructionFile "04-ai-chat-instructions.md" @"
# 04 - AI Chat Instructions

Rules
- Frontend never holds API keys
- SessionId saved in localStorage
- Show loading / retry on failure
"@

Write-InstructionFile "05-deployment-instructions.md" @"
# 05 - Frontend Deployment

Option A: Static (CloudFront/S3/Vercel)
Option B: Container (ECS + ALB)

Build output: dist/
"@

Write-Host "🎉 All instruction files generated."
