import React from "react"

export const Icons = {
    BlueButtonEllipse: (props: React.SVGProps<SVGSVGElement>) =>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="0.472222" y="0.472222" width="33.0556" height="33.0556" rx="16.5278" fill="url(#paint0_linear_2378_11398)" />
            <rect x="0.472222" y="0.472222" width="33.0556" height="33.0556" rx="16.5278" stroke="url(#paint1_linear_2378_11398)" strokeWidth="0.944444" />
            <circle cx="17.0002" cy="17.0002" r="1.88889" fill="white" stroke="white" strokeWidth="5.66667" />
            <defs>
                <linearGradient id="paint0_linear_2378_11398" x1="17" y1="-1.97693e-06" x2="32.7534" y2="20.7592" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0432692" stopColor="#94B2FE" />
                    <stop offset="1" stopColor="#667EDB" />
                </linearGradient>
                <linearGradient id="paint1_linear_2378_11398" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.24" />
                </linearGradient>
            </defs>
        </svg>,

    SmallBlueButtonEllipse: (props: React.SVGProps<SVGSVGElement>) =>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="5" cy="5" r="2" fill="white" stroke="#366BDB" stroke-width="6" />
        </svg>,

    WhiteButtonEllipse: (props: React.SVGProps<SVGSVGElement>) =>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="5" cy="5" r="2" fill="white" stroke="white" strokeWidth="6" />
        </svg>,
}