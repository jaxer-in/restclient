import config from "../config.json";
import Anchor from "./common/anchor";

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
          <i className="bi bi-arrow-return-right"></i>&nbsp; Rest client is an
          <Anchor href={config.links.openSource}>Open Source</Anchor> project, licensed under the
          <Anchor href={config.links.license}>Apache License 2.0</Anchor>.
        </p>
        <p className="mb-1 text-muted">
          <i className="bi bi-arrow-return-right"></i>&nbsp; Full source code is available on
          <Anchor href={config.links.repository}>github</Anchor>
        </p>
      </div>
    </div>
  );
};

export default About;
