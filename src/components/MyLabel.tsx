import "./MyLabel.css"

interface MyLabelProps {
  /**
   * The text to display
   */
  label: string
  /**
   * The size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3"
  /**
   * Whether the label text should be all caps
   */
  allCaps?: boolean
  /**
   * The color scheme of the label
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary"
  /**
   * The font color of the label
   */
  fontColor?: string
  /**
   * The background color of the label
   */
  backgroundColor?: string
}

export const MyLabel = ({
  label,
  size,
  allCaps,
  color,
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`${size} ${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
