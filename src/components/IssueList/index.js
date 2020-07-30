import React from "react";

const IssueList = ({ issues }) => {
  return (
    <div>
      {issues.map((issue) => (
        <IssueDetail key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

const IssueDetail = ({ issue }) => {
  return <h4>{issue.title}</h4>;
};

export default IssueList;
