import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe("Greeting Component", () => {
    test("render hello world as a text", () => {
        // Arrange
        render(<Greeting />)
        // Act

        // Assert
        const helloWorldElement = screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument();
    })

    test("render 'good to see you' if the button was NOT clicked" ,() => {
        render(<Greeting/>)

        const initialPara = screen.getByText("good to see you" , {exact:false});
        expect(initialPara).toBeInTheDocument();
    })

    test("render Changed! text if button was clicked!" , () => {
        //Arrange
        render(<Greeting/>);

        //Act
        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)

        //Asert
        const ChangePara = screen.getByText("Changed!");
        expect(ChangePara).toBeInTheDocument();
    })

    test("does not render 'good to see you' if the button was clicked!" ,() => {
        //Arrange
        render(<Greeting/>);

        //Act
        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)

        //Asert
        const ChangePara = screen.queryByText("good to see you" ,{exact:false});
        expect(ChangePara).toBeNull();
    })
})

