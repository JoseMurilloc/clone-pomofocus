import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddResource } from '.';

describe('<AddResource />', () => {
  it('should render label correctly', () => {
    render(<AddResource label="Add  project"/>);

    const buttonAddResource = screen.getByRole('button', {
      name: /Add project/
    })

    expect(buttonAddResource).toBeInTheDocument()
    expect(screen.getByText('Add project')).toBeTruthy()
  })

  it('should render icon lock when button have resource is premium', () => {
    render(
      <AddResource
        label="+ Add project"
        block={true}
      />
    );

    const buttonAddResource = screen.getByRole('button', {
      name: "+ Add project"
    })
    expect(buttonAddResource).toBeInTheDocument();

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  })

  it('not should be able render icon lock when button is not premium resource', () => {
    render(
      <AddResource
        label="+ Add project"
        block={false}
      />
    );

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  })
})


