import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('main', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>'
    vi.resetModules()
  })

  it('renders App inside StrictMode into the root element', async () => {
    const createRootMock = vi.fn(() => ({
      render: vi.fn(),
    }))

    vi.doMock('react-dom/client', () => ({
      createRoot: createRootMock,
    }))

    await import('./main.jsx')

    expect(createRootMock).toHaveBeenCalledTimes(1)
    const rootElement = createRootMock.mock.calls[0][0]
    expect(rootElement).toBe(document.getElementById('root'))
  })

  it('calls render on the created root', async () => {
    const renderMock = vi.fn()
    const createRootMock = vi.fn(() => ({
      render: renderMock,
    }))

    vi.doMock('react-dom/client', () => ({
      createRoot: createRootMock,
    }))

    await import('./main.jsx')

    expect(renderMock).toHaveBeenCalledTimes(1)
  })
})
