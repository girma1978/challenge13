import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNextCandidate();
  }, []);

  const loadNextCandidate = async () => {
    try {
      const users = await searchGithub();
      if (users.length === 0) {
        setError('No candidates available to review.');
        return;
      }
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const userData = await searchGithubUser(randomUser.login);
      setCurrentCandidate(userData);
    } catch (err) {
      setError('Error fetching candidate data');
    }
  };

  const handleSaveCandidate = () => {
    if (currentCandidate) {
      const storedCandidates = localStorage.getItem('potentialCandidates');
      const updatedCandidates = storedCandidates
        ? [...JSON.parse(storedCandidates), currentCandidate]
        : [currentCandidate];
      localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
      loadNextCandidate();
    }
  };

  const handleSkipCandidate = () => {
    loadNextCandidate();
  };

  const handleMissingData = (value: string | null | undefined) => {
    return value ? value : 'Not Provided';
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {error && <p>{error}</p>}

      {currentCandidate ? (
        <div>
          <div>
            <img
              src={currentCandidate.avatar_url}
              alt={currentCandidate.login}
              width={100}
            />
            <h2>{currentCandidate.name || 'No Name Provided'}</h2>
            <p><strong>Username:</strong> {currentCandidate.login}</p>
            <p><strong>Location:</strong> {handleMissingData(currentCandidate.location)}</p>
            <p><strong>Email:</strong> {handleMissingData(currentCandidate.email)}</p>
            <p><strong>Company:</strong> {handleMissingData(currentCandidate.company)}</p>
            <p><strong>Bio:</strong> {handleMissingData(currentCandidate.bio)}</p>
            <a
              href={currentCandidate.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
          <button onClick={handleSaveCandidate}>+</button>
          <button onClick={handleSkipCandidate}>-</button>
        </div>
      ) : (
        <p>Loading candidate...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
