import React from "react";

interface Color {}
interface Param {
  id: number;
  name: string;
  type?: string;
}
interface ParamValue {
  paramId: number;
  value: string;
}
interface Model {
  paramValues: ParamValue[];
  colors?: Color[];
}
interface Props {
  params: Param[];
  model: Model;
}

export default class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: props.model.paramValues,
    };
  }
  public getModel(): Model {
    return this.state.paramValues;
  }

  handleValueChange = (id: number, value: string) => {
    const { paramValues } = this.state;
    const newParamValues = paramValues.map((param: ParamValue) => {
      if (param.paramId === id) {
        return { ...param, value };
      }
      return param;
    });

    this.setState({ paramValues: newParamValues });
  };

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <div>
        {params.map((param) => (
          <div key={param.id}>
            <label>{param.name}</label>
            <input
              type="text"
              value={
                paramValues.find(
                  (paramValue: ParamValue) => paramValue.paramId === param.id
                )?.value || ""
              }
              onChange={(e) => this.handleValueChange(param.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }
}
