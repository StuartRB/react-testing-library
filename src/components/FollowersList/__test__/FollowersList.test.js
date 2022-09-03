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
    it('shows at least one follower from API call', async () => {
        render(<MockFollowersList />);
        const follower = await screen.findByTestId("follower-item-0");
        expect(follower).toBeInTheDocument();
    });

    // it('shows five followers from API call', async () => {
    //     render(<MockFollowersList />);
    //     const followers = await screen.findAllByTestId(/follower-item/i);
    //     expect(followers.length).toBe(5);
    // });
});


