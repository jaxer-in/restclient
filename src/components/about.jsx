import config from "../config.json";

const About = () => {
  return (
    <div className="container mt-4">
      <div className="text-start px-1">
        <h4>
          About rest client&nbsp;
          <i className="bi bi-terminal"></i>
        </h4>
      </div>
      <div className="px-3">
        <p className="mb-2 text-muted">
          <i className="bi bi-arrow-return-right"></i>&nbsp; Rest client is a light weight but powerfull tool to test
          your rest apis with support of analyze and validate responses.
        </p>
        <p className="mb-2 text-muted">
          <i className="bi bi-arrow-return-right"></i>&nbsp; Advance features like auto save last request makes it
          advacne rest client.
        </p>
        <p className="mb-2 text-muted">
          <i className="bi bi-arrow-return-right"></i>&nbsp; Rest client is an&nbsp;
          <a href={config.links.openSource} target="_blank" rel="noopener noreferrer">
            Open Source <i className="bi bi-box-arrow-up-right"></i>
          </a>
          &nbsp; project, licensed under the&nbsp;
          <a href={config.links.license} target="_blank" rel="noopener noreferrer">
            Apache License 2.0 <i className="bi bi-box-arrow-up-right"></i>
          </a>
          .
        </p>
        <p className="mb-1 text-muted">
          <i className="bi bi-arrow-return-right"></i>&nbsp; Full source code is available on&nbsp;
          <a href={config.links.repository} target="_blank" rel="noopener noreferrer">
            github <i className="bi bi-github"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
