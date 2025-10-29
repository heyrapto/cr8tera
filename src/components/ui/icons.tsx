import React from "react"

export const Icons = {
    BlueButtonEllipse: (props: React.SVGProps<SVGSVGElement>) =>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="5" cy="5" r="2" fill="white" stroke="#366BDB" stroke-width="6" />
        </svg>,

    WhiteButtonEllipse: (props: React.SVGProps<SVGSVGElement>) =>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="5" cy="5" r="2" fill="white" stroke="white" stroke-width="6" />
        </svg>,
}