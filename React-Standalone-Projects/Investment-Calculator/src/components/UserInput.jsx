import { useState } from "react";

export default function UserInput({ userInput, onUserInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            name="initialInvestment"
            onChange={onUserInputChange}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            name="annualInvestment"
            onChange={onUserInputChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            name="expectedReturn"
            onChange={onUserInputChange}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            name="duration"
            onChange={onUserInputChange}
            required
          />
        </p>
      </div>
    </section>
  );
}
