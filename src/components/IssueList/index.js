import React from "react";

const IssueList = ({ issues, showDetail }) => {
  return (
    <div>
      {issues.map((issue) => (
        <IssueDetail key={issue.id} issue={issue} showDetail={showDetail} />
      ))}
    </div>
  );
};

const IssueDetail = ({ issue, showDetail }) => {
  return <h4 onClick={() => showDetail(issue)}>{issue.title}</h4>;
};

export default IssueList;
