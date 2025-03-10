import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('potentialCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const handleReject = (candidateToRemove: Candidate) => {
    const updatedCandidates = savedCandidates.filter(
      (candidate) => candidate.login !== candidateToRemove.login
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates-container">
      <h1 className="saved-candidates-heading">Potential Candidates</h1>

      {savedCandidates.length === 0 ? (
        <p className="no-candidates-message">No candidates have been accepted yet.</p>
      ) : (
        <table className="saved-candidates-table">
          <thead className="saved-candidates-header">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate, index) => (
              <tr key={index} className="saved-candidates-row">
                <td>
                  <img
                    src={candidate.avatar_url || 'default-avatar.png'}
                    alt={candidate.login}
                    className="candidate-avatar"
                    width={50}
                    height={50}
                  />
                </td>
                <td>{candidate.name || candidate.login || 'No name provided'}</td>
                <td>{candidate.location || 'Not provided'}</td>
                <td>{candidate.email || 'Not provided'}</td>
                <td>{candidate.company || 'Not available'}</td>
                <td>{candidate.bio || 'No bio available'}</td>
                <td>
                  <button onClick={() => handleReject(candidate)} className="reject-button">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCandidates;
