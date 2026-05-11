import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React, { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { TextSmall } from '../../../../../../Style/TextStyle';

const Seats = () => {
  return (
    <div className="flex flex-col gap-4">
      <FieldGroup className="mx-auto">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
          <FieldLabel htmlFor="terms-checkbox-basic">
            <TextSmall>2 sièges</TextSmall>
          </FieldLabel>
        </Field>
      </FieldGroup>
      <FieldGroup className="mx-auto">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
          <FieldLabel htmlFor="terms-checkbox-basic">
            <TextSmall>4 sièges</TextSmall>
          </FieldLabel>
        </Field>
      </FieldGroup>
      <FieldGroup className="mx-auto">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
          <FieldLabel htmlFor="terms-checkbox-basic">
            <TextSmall>5 sièges</TextSmall>
          </FieldLabel>
        </Field>
      </FieldGroup>
      <FieldGroup className="mx-auto">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
          <FieldLabel htmlFor="terms-checkbox-basic">
            <TextSmall>6 sièges ou plus</TextSmall>
          </FieldLabel>
        </Field>
      </FieldGroup>
    </div>
  );
};

export default Seats;