# Component Palette

Choose components because they answer the page's questions. Do not fill every slot.

| Component | Use when | Avoid when |
|---|---|---|
| Requirement/capability matrix | the project has several well-defined local dependencies | it merely repeats badges already shown in the hero |
| Architecture diagram | service relationships are important to understanding the stack | the project is essentially one process and the diagram adds no insight |
| Service topology / Startup Group | multiple services/processes must start together or in order | the project does not benefit from coordinated startup |
| Real FlyEnv screenshot | product UI proves a meaningful project-specific capability | the screenshot is unreadable, fabricated, or generic |
| Result screenshot | the final running result is persuasive or recognizable | it adds decoration but no proof |
| New vs existing workflow | FlyEnv meaningfully supports both paths differently | both paths are nearly identical |
| Version/runtime matrix | compatibility/version isolation is a core pain point | versions are incidental |
| Site workflow | domains, document roots, HTTPS, multiple sites are central | the technology is not site-centric |
| Code/config example | a small concrete snippet explains a real integration | it turns the Solution into a step-by-step Guide |
| Comparison table | users genuinely choose between distinct approaches and claims can stay current | it exists only because Laravel has one, or it creates maintenance risk |
| FAQ | real recurring questions remain unanswered by the body | questions are invented to pad the page |
| Feature cards | several benefits need quick scanning after proof has been established | cards merely restate the requirement matrix |
| Project lifecycle | create/import/run/manage/update are central to the workflow | the lifecycle is not distinctive |

## Visual selection rule

Match the visual model to the technology:

- request path → architecture flow
- many services → topology
- versions → matrix
- multiple sites → site list/workflow
- create/import process → workflow cards
- product claim → real UI proof

Do not select a visual solely because it looked good on another Solution page.
