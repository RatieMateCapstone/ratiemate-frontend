import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieEdit from "../pages/MovieEdit";


// Mock the useParams and useNavigate hooks used in the MovieEdit component
jest.mock('react-router-dom', () => ({
 ...jest.requireActual('react-router-dom'),
 useParams: () => ({
   id: '1',
 }),
 useNavigate: () => jest.fn(),
}));


describe("<MovieEdit />", () => {
   const mockUpdateMovie = jest.fn();
   const mockMovies = [
     { id: 1, title: 'Movie 1', image: '', trailer: '', rating: '', description: '', platform: '', genre: '' },
     // Add more movies if necessary
   ];


   it("renders all input fields", () => {
       render(
           <BrowserRouter>
               <MovieEdit updateMovie={mockUpdateMovie} movies={mockMovies} />
           </BrowserRouter>
       );


       expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
       expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
       expect(screen.getByLabelText(/trailer/i)).toBeInTheDocument();
       expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
       expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
       expect(screen.getByLabelText(/platform/i)).toBeInTheDocument();
       expect(screen.getByLabelText(/genre/i)).toBeInTheDocument();
   });


   it("updates state with input changes", () => {
       render(
           <BrowserRouter>
               <MovieEdit updateMovie={mockUpdateMovie} movies={mockMovies} />
           </BrowserRouter>
       );


       const titleInput = screen.getByLabelText(/title/i);
       fireEvent.change(titleInput, { target: { value: 'New Title' } });
       expect(titleInput.value).toBe('New Title');
   });


   it("calls handleUpdate when form is submitted", () => {
       render(
           <BrowserRouter>
               <MovieEdit updateMovie={mockUpdateMovie} movies={mockMovies} />
           </BrowserRouter>
       );


       const form = screen.getByTestId('formEdit');
       fireEvent.submit(form);
       expect(mockUpdateMovie).toHaveBeenCalled();
   });


   it("has a submit button with correct text", () => {
       render(
           <BrowserRouter>
               <MovieEdit updateMovie={mockUpdateMovie} movies={mockMovies} />
           </BrowserRouter>
       );


       const updateButton = screen.getByRole('button', { name: /update/i });
       expect(updateButton).toBeInTheDocument();
       expect(updateButton.textContent).toBe('Update');
   });


   // ... Add more tests as needed for further coverage
});






