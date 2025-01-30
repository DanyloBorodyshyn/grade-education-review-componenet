export interface ReviewProps {
    reviews_count: number,
    grade: number,
    id: string | number,
    text: string
}

export interface ButtonProps {
    type?: ButtonType
}

type ButtonType = 'primary' | 'secondary'