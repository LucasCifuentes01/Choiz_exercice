import { useStepStore } from '../src/pages/questions/store/step.store';

jest.mock('../src/pages/questions/store/step.store', () => {
  const zustand = jest.requireActual('zustand');

  const mockStore = {
    step: 1,
    incrementStep: jest.fn(),
    decrementStep: jest.fn(),
  };

  return { default: zustand.create(() => mockStore) };
});
