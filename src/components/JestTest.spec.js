import {fireEvent, render} from '@testing-library/svelte';

import JestTest from './JestTest.svelte'

describe('JestTest', () => {
  test('message and input have alwayys same values', async () => {
    const {container, getByText} = render(JestTest);
    const input = container.querySelector('input');
    const button = container.querySelector('button');

    // initial state
    expect(getByText('hi'));
    expect(input.value).toBe('hi');
    // type in input
    await fireEvent.input(input, {target: {value: 'yum yum'}});
    expect(getByText('yum yum'));
    expect(input.value).toBe('yum yum');
    // click button
    await fireEvent.click(button);
    expect(getByText('bye'));
    expect(input.value).toBe('bye');
  });
});