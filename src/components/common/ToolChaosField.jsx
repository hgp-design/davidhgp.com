import './ToolChaosField.css'

const tools = [
  { key: 'lovable', label: 'Lovable' },
  { key: 'figma', label: 'Figma' },
  { key: 'cursor', label: 'Cursor' },
  { key: 'claudecode', label: 'Claude Code' },
  { key: 'chatgpt', label: 'ChatGPT' },
  { key: 'gemini', label: 'Gemini' },
  { key: 'copilot', label: 'Copilot' },
  { key: 'replit', label: 'Replit' },
  { key: 'gpt4', label: 'GPT-4' },
  { key: 'v0', label: 'v0' },
  { key: 'bolt', label: 'Bolt' },
  { key: 'windsurf', label: 'Windsurf' },
  { key: 'midjourney', label: 'Midjourney' },
  { key: 'dalle', label: 'Dall-E' },
  { key: 'perplexity', label: 'Perplexity' },
  { key: 'googleai', label: 'Google AI Studio' },
  { key: 'devin', label: 'Devin' },
  { key: 'framerai', label: 'Framer AI' },
  { key: 'galileoai', label: 'Galileo AI' },
  { key: 'uizard', label: 'Uizard' },
  { key: 'tabnine', label: 'Tabnine' },
  { key: 'codex', label: 'Codex' },
]

function ToolChaosField() {
  return (
    <div className="tool-chaos-field" aria-hidden="true">
      {tools.map(({ key, label }) => (
        <span key={key} className={`tcf-tool tcf-${key}`}>{label}</span>
      ))}
    </div>
  )
}

export default ToolChaosField
