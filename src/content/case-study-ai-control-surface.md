# Building the AI Control Surface

Different tools, different workflows, a lot of dead ends. One solution changed how I thought about AI and design systems entirely.

*(Visual: Tool logos — Lovable, Figma, Cursor, Claude Code — arranged as a progression or flow. Launchpad/icon grid style. Sits between title and intro copy.)*

That solution came out of one of the more chaotic periods of my career.

---

## Context

As Principal Designer at Kontakt.io, I was essentially acting head of design across five concurrent clinical products with one other designer on the team. Leadership mandated a GenAI-first process. Access to tools wasn't the problem. Knowing how to use them well, in the right sequence, with the right guardrails, was something the design landscape is still figuring out.

*(Visual 1: Three questions as a visual element — "Where do you even begin? Which tools, in what order? How do you make it stick?" — three icons or symbols with questions as labels. Frames the case study as an answer to questions the whole industry is sitting with.)*

*(Visual 2: Grid of tool pairings/stacks showing the landscape of options — Figma + MCP, VS Code + Claude Code extension, Cursor + Claude Code, Lovable standalone, etc. Illustrates the decision complexity before the solution is introduced. Tool logos with pairing indicators.)*

---

## The Challenge

Product was using Lovable to generate UI and handing it to design as a finished spec. The actual work, stabilizing AI output into something production-ready, was invisible to everyone except engineering. Executives couldn't quantify it. Product didn't recognize it as real work.

Any attempt at formalizing the process got shut down immediately. The response was pretty clear: "I don't care how it gets done. Just get it done." So I stopped trying to change how people saw the problem and started building infrastructure that would make the problem irrelevant.

*(Visual: Image slider or auto-rotating carousel. "What product and executives see" — Lovable output at optimal browser size, looks finished. "What they don't see" — same output showing broken responsiveness, inconsistency across pages, accessibility issues. Makes the invisible visible. Interaction TBD: manual arrows or auto-rotate.)*

---

## The Approach

The CTO had already solved a version of this problem for engineering. Every repo got a master markdown file: a document that AI reads before generating any code. Rules, constraints, and coding patterns. I recognized immediately that design could do the same thing.

What started as a 27-page design system file evolved into 71 pages, intended to be stored in the repo root right next to engineering's. Not a style guide. Not a Figma library. A governing document written for AI to execute against, not humans to follow. It took about 20 hours. I started with an audit of actual production code because I wanted to build from what already existed rather than introduce patterns that would expand engineering scope.

The first real test came from an actual delivery request: getting the RoundGuard clinical dashboard production-ready. The design system file was copied directly into the repo. Rather than working directly on the existing dashboard, I asked Claude Code to redesign it as a new page in the nav so we could do a live A/B comparison.

Initial pages came back in minutes. The next three to four hours were spent refining outputs, correcting edge cases, and getting everything into a state engineering could actually ship. They confirmed roughly 90% fidelity in their Angular environment.

*(Visual 1: Excerpts from the design system file shown as a slideshow or carousel. Three specific sections: (1) token taxonomy naming conventions, (2) slot architecture rules, (3) page layout framework rules. Makes the document feel real and tangible. Could be styled code blocks or document screenshots.)*

---

## Result

Before this, design was either prompting our way out of bad output inside Lovable or rapidly designing in Figma and delivering comps alongside the codebase. Whichever felt faster in the moment. After this test, what I would have scoped for twenty to thirty hours took four. That meant we could realistically cut delivery time in half across the board.

The design system file was shared directly with frontend engineers to test within their own repos. The director of engineering took it for a run and came back with no issues. That same thinking shaped how we approached Figma. When Figma announced that Claude Code could write directly into the design environment, not just read from it, the opportunity was obvious. We built out a system structure through Figma MCP that let Claude produce delivery-ready outputs directly in Figma.

*(Visual: Before and after of the RoundGuard dashboard — Lovable output before the design system file versus the governed output after. Pays off the promise made visually in The Challenge section. Interaction TBD: slideshow, side by side, or carousel.)*

---

## Reflection

Context memory was something I hadn't thought about going in. Every AI model has a limit to how much it can actively reference at once, and the bigger the file, the more that limit starts affecting output quality. A 71-page document is a lot to ask any model to hold. Splitting it into smaller focused files, each scoped to a specific part of the design system and only loaded when relevant, was a lesson I learned by running into the problem rather than anticipating it.

The bigger realization was about what design's job actually is now. It's not just using AI tools. It's orchestrating and operating the system that makes those tools produce the right output. Think of it like a design system. It starts light and incomplete. Over time it gets more precise, more robust, more useful. The governing document is no different. You build it, you use it, you learn from it, and it evolves.

*(Visual: Tree/org chart diagram showing the modular file architecture. Master file at the top branching into sub-files, each branching further into specific domain files. Communicates orchestration and control. Clean, minimal, Apple-like. Style and background TBD.)*
