import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return(
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
};

describe("FollowersList", () => {

    beforeAll(() => {
        console.log("Runs once before all tests")
    });

    beforeEach(() => {
        console.log("Runs before each test")
    });

    afterAll(() => {
        console.log("Runs once after all tests")
    });

    it('shows at least one follower from API call', async () => {
        render(<MockFollowersList />);
        const follower = await screen.findByTestId("follower-item-0");
        expect(follower).toBeInTheDocument();
    });

    it('test ', async () => {
        expect(true).toBe(true);
    });
    // it('shows five followers from API call', async () => {
    //     render(<MockFollowersList />);
    //     const followers = await screen.findAllByTestId(/follower-item/i);
    //     expect(followers.length).toBe(5);
    // });
});


