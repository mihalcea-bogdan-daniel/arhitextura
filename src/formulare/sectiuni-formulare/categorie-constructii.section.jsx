import React from "react";

import Checkbox from "../../components/checkbox/checkbox.component";
import GridContainer from "../../components/grid-container/grid-container.component";
import Section from "../../components/section/section.component";

const CategorieConstructii = (props) => {
  const tabel = props.tabel;

  let depth = -1;
  let childArray = [];
  function traverse(obj) {
    for (let key in obj) {
      if (!!obj[key] && typeof obj[key] == "object") {
        depth++;
        traverse(obj[key]);
      } else {
        if (key === "content") {
          childArray.push(
            <Checkbox
              className="cb-inputs"
              key={obj["id"]}
              name={obj["id"]}
              style={{
                marginLeft: `${(depth / 2) * (props.indentSubCat || 20)}px`,
              }}
            >
              {`${obj[key]}`}
            </Checkbox>
          );
        }
      }
    }
    --depth;
  }
  traverse(tabel);

  return (
    <Section>
      <GridContainer
        columns="2"
        rows="19"
        style={{ paddingLeft: "40px", paddingRight: "40px", margin: "0" }}
      >
        {childArray}
      </GridContainer>
    </Section>
  );
};

export default CategorieConstructii;
