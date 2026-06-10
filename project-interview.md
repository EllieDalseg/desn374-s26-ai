# Project Interview Notes

## Project Title
CLOSED — 1985

## One-Sentence Project Summary
I used Claude Code to build a fully playable, atmosphere-driven 3D horror game set in an abandoned 1985 shopping mall — exploring what AI is truly capable of in game production and what it means to co-create something with it.

## Starting Point
The project started with a big idea: make an open-world 3D game entirely with AI. I thought that would really test the limits of what AI could do. But as I got further into it, I realized that scope was probably too large for a school project timeline. While doing research, I noticed that most people on YouTube who were making games with AI were making horror games — the genre is more linear, more contained, and easier to scope. So I pivoted. The horror direction wasn't originally planned; it came out of research and practical thinking.

## Inquiry Question
What is AI truly capable of when it comes to game production — and how easily can it make something complex?

## Why This Question Mattered
I want to go into game design as a career. The fear of AI taking jobs in that industry has always been in the back of my mind. This project was my way of actually confronting that fear directly instead of just worrying about it. I wanted to understand what AI can and can't do, and figure out how I could work alongside it rather than be replaced by it.

## Research and Sources
- **YouTube — b cart, "I made 6 AIs WORK TOGETHER to make a Horror Game"**: Showed that using multiple specialized AI tools can produce a faster but fragmented workflow, and that human input is still necessary throughout. This helped me understand prompting strategy and gave me early confidence the project was possible.
- **YouTube — HollowWolf, "AI Builds a Horror Game From Scratch in 7 Days"**: Documented using ChatGPT to build a complete horror game in a week. Reinforced that AI works best as an assistant, not an independent creator — the human still has to direct, test, and fix.
- **AWS Blog — "AI-Assisted Game Production: From Static Concept to Interactive Prototype"**: Introduced the idea of structuring development in stages with specific AI roles at each step.
- **GoodFirms — "AI in Game Development: How It's Reshaping Studios, Tools & Player Experiences in 2026"**: Big-picture industry snapshot. Key stat: 90% of developers are already using AI in their workflows.
- **Odin Law — "The Game Developer's Guide to AI Governance"**: A reality check on the legal and ethical risks of using AI in game dev — copyright, IP ownership, and accountability questions.
- **Capitol Technology University — "AI in Video Game Development"**: Covered smarter NPCs, procedural generation, and adaptive gameplay as practical applications already in use.

## What I Found
Most creators I researched used multiple different AI models — one for writing, one for art, one for code, one for sound. My professor told me Claude Code could handle all of it if I directed it well enough, so I committed to a single-tool approach. That was a real constraint but it worked. The biggest finding wasn't about the technology itself — it was about the role the human plays. AI can execute fast, but it can't tell you when something feels wrong. That judgment has to come from you.

## Source Verification
The YouTube sources were the most useful for understanding real workflow — they showed actual footage of what AI produced, not just claims. The industry articles (GoodFirms, AWS) were more abstract and forward-looking, so I treated them as context rather than proof. The Odin Law article was useful as a counterpoint to the more optimistic sources — it raised questions I hadn't thought about, like who owns what gets made.

## How Research Shaped the Project
The YouTube videos directly shaped how I approached prompting — seeing other creators struggle with vague prompts made me much more specific from the start. The horror genre choice came directly from watching what worked for other people. And the decision to use one AI model instead of several came from a conversation with my professor after I'd done the research.

## Research Dashboard / Approach and Engagement
My research was hands-on and comparative. I didn't just read — I watched people do it, took notes, used NotebookLM to make mind maps and flashcards, and then immediately tested what I learned in my own project. I used ChatGPT first (as a research tool and early game builder), then switched to Claude Code once I understood the difference in capability. Every source was evaluated against what I was actually experiencing in my own process.

## AI Tools and Prompt Experiments
- **ChatGPT (early stage)**: Used for initial planning, concepting, and early game-building. Produced a game with white walls, white floor, no ceiling, no sound, no aesthetics. Could not get further than basic geometry no matter how many references or iterations I gave it.
- **Claude Code (primary tool)**: Switched after hearing from classmates and my professor. Immediately understood my references and aesthetic direction. Built a complex map with dark lighting, dingy wallpaper, low ambient sound, and real atmosphere on the first attempt. Used for all 40+ versions of the game.
- **Key prompt insight**: Specificity was everything. Vague prompts produced vague results. Once I started describing exactly what I wanted — Harold's height, how he moves, how often he spawns, what the lighting should feel like — the output got dramatically better.

## Process Page / Workflow and Pivots
The workflow was daily, iterative, and notebook-driven. I would play through the current version, write down everything that felt wrong or missing in a physical notebook, then feed those notes back to Claude as a new set of instructions. This happened over 40+ versions.

Major pivots:
- **ChatGPT → Claude Code**: The single biggest turning point. Stopped wasting time with a tool that wasn't capable of what I needed.
- **Open-world → horror**: Scoped down from an ambitious concept to something achievable in the project timeline.
- **Harold's design**: Went from a white rectangle (ChatGPT), to a simple pale figure (early Claude), to the final unsettling, asymmetric, blood-smeared janitor after multiple rounds of increasingly specific direction.
- **Maze backroom**: Rebuilt three times — the first version was solvable in seconds, the second had a wall blocking the only valid path, the third is a verified serpentine route.
- **Exit sequence**: Started as a browser prompt for a door code. Went through multiple iterations to become a proper keypad overlay with a full final-chase sequence.

## Final Product or Outcome
**CLOSED — 1985** — a fully playable browser-based 3D horror game.

You play as a mall security guard on the overnight shift of November 14, 1985. The power goes out. The exits lock. Something is wrong. As you explore the abandoned corridors of Westfield Mall, you find 7 VHS tapes left behind by former employees. Each tape reveals more about Harold Finch — the janitor who died in this mall and never left. The final tape gives you the exit code. But the moment you have it, Harold knows. And the chase begins.

**Technical specs**: Single HTML file (~2,500 lines), Three.js for 3D rendering, PS1-style low-res render pipeline, procedural audio, AABB collision, first-person movement, VHS tape viewer, inventory system, stamina bar, keypad UI, Harold AI with three behavior modes (dormant / lurking / chasing).

**Live at**: https://closed1985.netlify.app/

## Product Page / Authorship and Synthesis
Every major decision in this game came from me. Claude was the technical executor — I was the director. I described Harold's appearance in detail until he looked right. I designed the lore system across all 7 tapes. I decided the mall layout, which rooms existed, what was in them, and how the lighting should feel. I playtested every version and kept notes on what was broken, what wasn't scary enough, what felt off. I made Harold scarier by specifying exactly what uncanny meant — too tall, asymmetric, rotting, like he'd been there a long time. None of that came from AI. The AI made it real. I decided what it should be.

The game draws references from Slender Man, Silent Hill, FNAF, and backrooms/liminal space aesthetics — I pulled what I liked from each and cut what didn't fit the scope or tone I was going for.

## What I Learned
- Not all AI tools are equal for the same task. ChatGPT and Claude Code produced completely different results from the same prompt and vision.
- The most important skill in AI-assisted creative work is knowing what you want clearly enough to describe it. Vision has to come first.
- AI can execute fast, but it can't judge. The human creative eye — knowing when something feels wrong, scary, off, or right — is still entirely irreplaceable.
- I don't think AI is going to take my job. But I do think it's going to change what the job looks like. The people who thrive will be the ones who know how to direct it.
- Building something you're genuinely passionate about makes the hard parts worth it. This never felt like homework.

## Reflection Notes
The fear of AI replacing me is still real, but it's more specific now. I understand better what AI can and can't do. It can't have taste. It can't decide what feels scary. It can't know when something is almost right but not quite there yet. That judgment is mine. What I learned is that working with AI is a skill — and like any skill, the more intentional you are about it, the better the results.

If I started over: I'd skip ChatGPT entirely and go straight to Claude Code. And I'd come in with a clearer plan — not a finished design, but at least a tighter sense of scope and what I was actually trying to make.

## Private Evaluation Notes
*(Keep this section out of the public website)*

- The ChatGPT struggle was a significant part of the process but should be framed carefully on the public site — it's a useful comparison point, not a failure story.
- Personal motivation (fear of AI taking my job) is honest and compelling but decide how much of that to share publicly vs. keeping it in the Canvas reflection.
- Professor Travis's advice to use Claude for everything was a pivotal moment — worth crediting in the Canvas reflection.
- The 40+ version count and physical notebook are strong evidence of process rigor — include this in the Canvas reflection and consider whether to feature it on the public site.
- The maze being rebuilt three times is a good concrete example of iteration — could include in process section.

## Evidence to Include
- Screenshots of the final game (multiple rooms, Harold appearing in a hallway, VHS tape screens, death screen, win screen)
- Side-by-side comparison: ChatGPT version vs. early Claude version vs. final version
- Early gameplay videos (linked in Milanote: early demo, V8, V19, final)
- Screenshot or description of physical notebook / playtest notes
- The 7 VHS tape texts as lore artifacts
- Final game embed or link: https://closed1985.netlify.app/

## Links and Workspace Materials
- **Live game**: https://closed1985.netlify.app/
- **Early ChatGPT demo**: https://youtu.be/_5vEGTjtcaU
- **Early Claude version**: https://youtu.be/dEv-0jhjZIo
- **V8 Claude version**: https://youtu.be/xMTTuePbIPo
- **V19 Claude version**: https://youtu.be/VDmnJ-Zgy1s
- **Initial planning chat (ChatGPT)**: https://chatgpt.com/share/6a1d00be-efac-83e8-a860-933df9e9890c
- **Initial production chat (ChatGPT)**: https://chatgpt.com/share/6a2075ec-00d0-83e8-8c2b-a69aa90f7b25
- **Game file**: claudegame13.html
- **Dev log**: CLOSED — 1985 Full Development Log.pdf
- **Milanote research board**: (source of all weekly summaries and source interactions)
