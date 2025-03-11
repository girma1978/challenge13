# Candidate Search Application

## Overview

This project is a Candidate Search Application where users can view and manage potential candidates for a job role. The application allows users to cycle through a list of candidates, view their details, and save candidates to a "potential candidates" list. The saved list of potential candidates is persisted and can be viewed later, even if the page is reloaded.

## Features

- **Candidate Viewing**: Users can view details for a candidate, including their name, username, location, avatar, email, HTML URL, and company.
- **Save Candidate**: Users can click the "+" button to add the current candidate to a "potential candidates" list.
- **Skip Candidate**: Users can click the "-" button to skip the current candidate and view the next one without saving the current candidate.
- **No More Candidates**: If there are no more candidates to review, an appropriate message will inform the user.
- **Potential Candidates List**: The application keeps track of all saved candidates and allows users to view a list with their details.
- **Persistence**: Saved candidates persist on page reload and are available for review even after the page is refreshed.
- **Empty State**: If no candidates have been saved, an appropriate message will inform the user.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Local Storage**: To persist the list of potential candidates across page reloads.

## Deployment

- **GitHub Repository**: [https://github.com/girma1978/challenge13](https://github.com/girma1978/challenge13)
- **Deployed Application**: [https://challenge13-fypj.onrender.com/](https://challenge13-fypj.onrender.com/)
