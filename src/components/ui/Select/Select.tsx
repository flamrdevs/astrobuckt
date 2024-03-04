import { forwardRef, useMemo } from "react";
import type { ForwardedRef } from "react";

import * as RadixSelect from "@radix-ui/react-select";

import type { VariantsOfGroup } from "@klass/core/group";

import { Lucide } from "~/components/icons";

import type { ClassNamesProps } from "./../types.ts";

import styles from "./Select.styles.ts";

export type SelectItem<T extends string> = {
  value: T;
  label: string;
};

export type SelectProps<T extends string> = { data: SelectItem<T>[] } & Omit<
  RadixSelect.SelectProps,
  "value" | "defaultValue" | "onValueChange"
> & {
    value?: T;
    defaultValue?: T;
    onValueChange?: (value: T) => void;
  } & Omit<RadixSelect.SelectTriggerProps, keyof RadixSelect.SelectProps | "asChild" | "placeholder"> &
  Pick<RadixSelect.SelectValueProps, "placeholder"> &
  ClassNamesProps<Exclude<keyof typeof styles, "scrollbutton">> &
  VariantsOfGroup<typeof styles>;

export const Select = forwardRef(
  <T extends string>(
    {
      data,
      //
      value,
      defaultValue,
      onValueChange,
      open,
      defaultOpen,
      onOpenChange,
      dir,
      name,
      autoComplete,
      disabled,
      required,
      //
      size,
      className,
      classNames,
      placeholder,
      ...props
    }: SelectProps<T>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const cx = useMemo(() => {
      const variants = { size };
      return {
        trigger: styles.trigger(variants, className ?? classNames?.trigger),
        content: styles.content(variants, classNames?.content),
        item: styles.item(variants, classNames?.item),
        scrollbutton: styles.scrollbutton(variants),
      };
    }, [size, className, classNames]);

    return (
      <RadixSelect.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        dir={dir}
        name={name}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
      >
        <RadixSelect.Trigger ref={ref} className={cx.trigger} {...props}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            <Lucide.IconChevronDown />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className={cx.content}>
            <RadixSelect.ScrollUpButton className={cx.scrollbutton}>
              <Lucide.IconChevronUp />
            </RadixSelect.ScrollUpButton>
            <RadixSelect.Viewport className="p-1">
              {data.map((item) => (
                <RadixSelect.Item key={item.value} value={item.value} className={cx.item}>
                  <RadixSelect.ItemText>{item.label}</RadixSelect.ItemText>
                  <RadixSelect.ItemIndicator className="absolute left-1 inline-flex items-center justify-center w-6">
                    <Lucide.IconCheck className="size-2/3" />
                  </RadixSelect.ItemIndicator>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
            <RadixSelect.ScrollDownButton className={cx.scrollbutton}>
              <Lucide.IconChevronDown />
            </RadixSelect.ScrollDownButton>
            <RadixSelect.Arrow />
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    );
  }
) as {
  <T extends string>(props: SelectProps<T>): JSX.Element;
  displayName?: string;
};

if (import.meta.env.DEV) Select.displayName = "Select";
