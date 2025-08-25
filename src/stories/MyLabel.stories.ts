import type { Meta, StoryObj } from "@storybook/react-vite"
import { MyLabel } from "../components/MyLabel"

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "inline-radio",
    },
    fontColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof MyLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: "Hello World!",
  },
}

export const AllCaps: Story = {
  args: {
    label: "All CAPS LABEL",
    allCaps: true,
  },
}

export const SecondaryLabel: Story = {
  args: {
    label: "SecondaryLabel",
    color: "text-secondary",
  },
}

export const CustomColor: Story = {
  args: {
    label: "CustomColor",
    fontColor: "#ff0000",
  },
}

export const CustomBackground: Story = {
  args: {
    label: "CustomBackground",
    backgroundColor: "black",
    size: "h1",
    allCaps: true,
    fontColor: "white",
  },
}
