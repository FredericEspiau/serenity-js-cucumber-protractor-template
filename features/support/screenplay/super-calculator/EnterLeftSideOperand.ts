import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/protractor';
import { SuperCalculatorWidget } from './ui';

export const EnterLeftSideOperand = {

    of: (value: string | number) =>
        Task.where(`#actor enters left operand of ${ value }`,
            Enter.theValue(value).into(SuperCalculatorWidget.leftOperandInput),
        ),
};
