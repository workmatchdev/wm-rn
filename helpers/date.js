export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-Es', options)
}

export const getFormattedDate = (value) => {
    const date = value ? new Date(value) : new Date();
    return date.toISOString().split('T')[0];
}

export const formatterPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MXN',
  });
