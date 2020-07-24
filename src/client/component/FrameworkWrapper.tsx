import React, { useContext } from "react";
import {
  Accordion,
  AccordionProps,
  Button,
  ButtonProps,
  Checkbox,
  CheckboxProps,
  Divider,
  DividerProps,
  Form,
  FormProps,
  Grid,
  GridProps,
  Header,
  HeaderProps,
  Icon,
  IconProps,
  Input,
  InputProps,
  Label,
  LabelProps,
  List,
  ListProps,
  Loader,
  LoaderProps,
  Menu,
  MenuProps,
  Message,
  MessageProps,
  Placeholder,
  PlaceholderProps,
  Segment,
  SegmentProps,
  Select,
  SelectProps,
  Statistic,
  StatisticProps,
  Tab,
  Table,
  TableProps,
  TabProps,
} from "semantic-ui-react";
import { ThemeContext } from "../context/ThemeProvider";
import { AccordionContext } from "../context/AccordionProvider";
import WingBlank from "./WingBlank";
import { SelectOption } from "../model/CustomType";

export const CustomIcon = ({ className, onClick, ...restProps }: IconProps) => {
  let classNames = [];
  classNames.push(className);
  if (onClick) {
    classNames.push("cursor");
  }
  return (
    <Icon {...restProps} className={classNames.join(" ")} onClick={onClick} />
  );
};

export const CustomSegment = (props: SegmentProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Segment inverted={isDarkMode} {...props} />;
};

export const CustomTable = (props: TableProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Table inverted={isDarkMode} {...props} />;
};

export const CustomGrid = (props: GridProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Grid inverted={isDarkMode} {...props} />;
};

export const CustomMenu = (props: MenuProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Menu inverted={isDarkMode} {...props} />;
};

interface CustomAccordionProps extends AccordionProps {
  persistentKey?: string;
}

export const CustomAccordion = ({
  persistentKey,
  onTitleClick,
  ...restProps
}: CustomAccordionProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { setActiveIndex, getActiveIndex } = useContext(AccordionContext);
  const props: AccordionProps = { ...restProps };
  if (persistentKey && !restProps.activeIndex) {
    props.defaultActiveIndex = getActiveIndex(persistentKey);
  }
  return (
    // styled and inverted are mutually exclusive.
    <Accordion
      {...props}
      inverted={isDarkMode}
      onTitleClick={(_, d) => {
        const { index } = d;
        onTitleClick?.(_, d);
        if (persistentKey) {
          setActiveIndex(persistentKey, index);
        }
      }}
    />
  );
};

export const CustomDivider = (props: DividerProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Divider inverted={isDarkMode} {...props} />;
};

export const CustomMessage = (props: MessageProps) => {
  // let color = null;
  // const {warning, error, success} = props;
  // const icon: SemanticICONS = success? "check" : warning? "warning circle" : error? "close": null;
  return <Message {...props} />;
};

export const CustomPlaceholder = (props: PlaceholderProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Placeholder inverted={isDarkMode} {...props} />;
};

export const CustomList = (props: ListProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <List inverted={isDarkMode} {...props} />;
};

export const CustomTab = (props: TabProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Tab {...props} menu={{ ...props.menu, inverted: isDarkMode }} />;
};

export const CustomStatistic = (props: StatisticProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Statistic inverted={isDarkMode} {...props} />;
};

export const CustomInput = (props: InputProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Input inverted={isDarkMode} {...props} />;
};

export const CustomLabel = (props: LabelProps) => {
  const classNames: string[] = [];
  if (props.onClick) classNames.push("cursor");
  return <Label className={classNames.join(" ")} {...props} />;
};

export const CustomForm = (props: FormProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Form inverted={isDarkMode} className="formLayout" {...props} />;
};

export const CustomHeader = (props: HeaderProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Header inverted={isDarkMode} as="h3" {...props} />;
};

interface CustomCheckBoxProps extends Omit<CheckboxProps, "onChange"> {
  label?: string;
  onChange: (bool: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
}

export const CustomCheckBox = ({
  label,
  onChange,
  ...restProps
}: CustomCheckBoxProps) => {
  return (
    <React.Fragment>
      <Checkbox
        {...restProps}
        onChange={(e, data) => {
          onChange(data.checked);
        }}
      />
      {label && <WingBlank style={{ verticalAlign: "top" }}>{label}</WingBlank>}
    </React.Fragment>
  );
};

interface CustomSelectProps extends Partial<SelectProps> {
  onChange: (val: any) => void;
  options: SelectOption[];
  value: any;
}

export const CustomSelect = (props: CustomSelectProps) => {
  const { onChange, ...restProps } = props;
  return (
    <Select
      clearable
      onChange={(e, { value }) => {
        onChange(value);
      }}
      {...restProps}
    />
  );
};

export const CustomButton = (props: ButtonProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { login, type = "button", ...restProps } = props;
  return (
    <Button
      size="small"
      {...restProps}
      aria-label={new Date().getTime()}
      type={type}
      inverted={isDarkMode}
    />
  );
};

export const CustomLoader = (props: LoaderProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  return <Loader inverted={isDarkMode} {...props} />;
};
