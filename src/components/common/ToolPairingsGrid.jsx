import './ToolPairingsGrid.css'
import cursorLogo from '../../assets/ai_logos/cursor-dark.svg'
import claudecodeLogo from '../../assets/ai_logos/claudecode-color.svg'
import vscodeLogo from '../../assets/ai_logos/vscode.svg'
import lovableLogo from '../../assets/ai_logos/lovable-color.svg'
import boltLogo from '../../assets/ai_logos/Bolt_logo.svg'
import replitLogo from '../../assets/ai_logos/replit-color.svg'
import figmaLogo from '../../assets/ai_logos/figma-color.svg'
import geminiLogo from '../../assets/ai_logos/gemini-color.svg'
import framerLogo from '../../assets/ai_logos/Framer Icon White.svg'

const TOOLS = [
  { name: 'Figma + AI plugins', subtitle: 'AI inside the design tool', logo: figmaLogo },
  { name: 'Claude Code + Figma MCP', subtitle: 'Code that writes to Figma', logo: claudecodeLogo },
  { name: 'Framer AI', subtitle: 'AI-powered site publishing', logo: framerLogo },
  { name: 'Lovable', subtitle: 'Generate apps from prompts', logo: lovableLogo },
  { name: 'Bolt', subtitle: 'Skip code, ship UI', logo: boltLogo },
  { name: 'Google AI Studio', subtitle: 'Multimodal AI generation', logo: geminiLogo },
  { name: 'Cursor', subtitle: 'Design in a code editor', logo: cursorLogo },
  { name: 'VS Code + Copilot', subtitle: 'AI pair programming', logo: vscodeLogo },
  { name: 'Replit + GPT-4', subtitle: 'Prototype in a cloud IDE', logo: replitLogo },
]

function ToolPairingsGrid() {
  return (
    <div className="tool-pairings-grid-wrapper">
      <p className="tool-pairings-caption">
        With AI tools and constant updates, no two product designers are running the same stack.
      </p>
      <div className="tool-pairings-grid">
        {TOOLS.map((tool) => (
          <div key={tool.name} className="tool-pairings-cell">
            <div className="tool-pairings-cell-inner">
              <img src={tool.logo} alt="" className="tool-pairings-logo" />
              <div className="tool-pairings-text">
                <span className="tool-pairings-name">{tool.name}</span>
                <span className="tool-pairings-subtitle">{tool.subtitle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolPairingsGrid
