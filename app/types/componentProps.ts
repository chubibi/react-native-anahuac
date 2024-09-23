import { Feather, Ionicons } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { ReactNode } from 'react'

export type BottomsheetBasicProps = {
	children: React.ReactNode
	snapPoints: string[]
	hasBackdrop?: boolean
	refBottomSheet?: React.RefObject<BottomSheet>
	isCloseOnDrag?: boolean
	backDropPress?: "close" | "none" | "collapse"
	style?: any
	onClose?: () => void
}

export type CustomLinearGradientProps = {
	children: ReactNode
	style?: object
	colors?: string[]
	horizontal?: boolean
}

export type DropDownListProps = {
	data: object[];
	value: any;
	setValue: (value: any) => void;
	placeholder?: string,
	search?: boolean,
	valueField: string,
	labelField: string,
	iconName?: keyof typeof Ionicons.glyphMap,
	style?: object
}

export type PickerDateTimeProps = {
	isShowing: boolean
	setIsShowing: any
	value: Date
	setValue: any
	marginTop?: number
	label?: string
	titleModal?: string
	mode: "datetime" | "time" | "date"
	maxDate?: Date
	minDate?: Date
}

export type CalendarCrownProps = {
	isShowing: boolean
	setIsShowing: any
	value: Date
	setValue: any
	titleModal?: string
	mode: "datetime" | "time" | "date"
	maxDate?: Date
	minDate?: Date
}
