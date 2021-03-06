import React, { ReactNode } from "react"
import Page from "../components/Page"
import { NextPageContext } from "next"

class Error extends React.Component<{ statusCode: null | number }> {
	static getInitialProps({ res, err }: NextPageContext): Error["props"] {
		const statusCode = res?.statusCode || err?.statusCode || null
		return { statusCode }
	}

	render(): ReactNode {
		return (
			<Page title="404">
				<div className="center mw7 pa3 pa4-ns">
					{this.props.statusCode
						? `An error ${this.props.statusCode} occurred on server`
						: "An error occurred on client"}
				</div>
			</Page>
		)
	}
}

export default Error
