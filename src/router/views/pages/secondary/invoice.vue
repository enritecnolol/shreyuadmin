<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

/**
 * Invoice component
 */
export default {
	page: {
		title: 'Invoice',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout, PageHeader },
	data() {
		return {
			title: 'Invoice',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Pages',
					href: '/',
				},
				{
					text: 'Invoice',
					active: true,
				},
			],
			invoiceDetail: {
				customer: 'Greeva Navadiya',
				notes:
					'Todas las cuentas deben pagarse dentro de los 7 días posteriores a la recepción de la factura. Para pagar con cheque o tarjeta de crédito o pago directo en línea. Si la cuenta no se paga dentro de los 7 días, los detalles de los créditos proporcionados como confirmación del trabajo realizado se cobrarán la tarifa acordada indicada anteriormente.',
				invoice_date: 'Jul 17, 2019',
				due_date: 'Jul 27, 2019',
				invoice_id: '#sh1001',
				address: {
					line_1: '795 Folsom Ave, Suite 600',
					city: 'San Francisco',
					state: 'CA',
					zip: 94107,
					phone: '(123) 456-7890',
				},
				billing_address: {
					line_1: '795 Folsom Ave, Suite 600',
					city: 'San Francisco',
					state: 'CA',
					zip: 94107,
					phone: '(123) 456-7890',
				},
				items: [
					{
						id: 1,
						name: 'Web Design',
						description: '2 Pages static website - my website',
						qty: 22,
						unit_cost: '$30.00',
						total: '$660.00',
					},
					{
						id: 2,
						name: 'Software Development',
						description: "Invoice editor software - AB'c Software",
						qty: 112.5,
						unit_cost: '$35.00',
						total: '$3937.50',
					},
				],
				sub_total: '$4597.50',
				discount: '$459.75',
				total: '$4137.75',
			},
		}
	},
}
</script>

<template>
	<Layout>
		<PageHeader :title="title" :items="items" class="d-print-none" />
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-body">
						<!-- Logo & title -->
						<div class="clearfix">
							<div class="float-sm-right">
								<img src="@assets/images/logoayala.png" alt height="48" />
								<!-- <h4 class="m-0 d-inline align-middle">Shreyu</h4> -->
								<address class="pl-2 mt-2">
									{{ invoiceDetail.address.line_1 }}
									<br />{{ invoiceDetail.address.city }},
									{{ invoiceDetail.address.state }}
									{{ invoiceDetail.address.zip }}
									<br />
									<abbr title="Phone">P:</abbr>
									{{ invoiceDetail.address.phone }}
								</address>
							</div>
							<div class="float-sm-left">
								<h4 class="m-0 d-print-none">Factura</h4>
								<dl class="row mb-2 mt-3">
									<dt class="col-sm-3 font-weight-normal">Número Factura :</dt>
									<dd class="col-sm-9 font-weight-normal">{{
										invoiceDetail.invoice_id
									}}</dd>

									<dt class="col-sm-3 font-weight-normal">Fecha Factura :</dt>
									<dd class="col-sm-9 font-weight-normal">{{
										invoiceDetail.invoice_date
									}}</dd>

									<dt class="col-sm-3 font-weight-normal">Fecha Vencimiento :</dt>
									<dd class="col-sm-9 font-weight-normal">{{
										invoiceDetail.due_date
									}}</dd>
								</dl>
							</div>
						</div>

						<div class="row mt-4">
							<div class="col-md-6">
								<h6 class="font-weight-normal">Facturada por:</h6>
								<h6 class="font-size-16">{{ invoiceDetail.customer }}</h6>
								<address>
									{{ invoiceDetail.billing_address.line_1 }}
									<br />{{ invoiceDetail.billing_address.city }},
									{{ invoiceDetail.billing_address.state }}
									{{ invoiceDetail.billing_address.zip }}
									<br />
									<abbr title="Phone">P:</abbr>
									{{ invoiceDetail.billing_address.phone }}
								</address>
							</div>
							<!-- end col -->

							<div class="col-md-6">
								<div class="text-md-right">
									<h6 class="font-weight-normal">Total</h6>
									<h2>{{ invoiceDetail.total }}</h2>
								</div>
							</div>
							<!-- end col -->
						</div>
						<!-- end row -->

						<div class="row">
							<div class="col-12">
								<div class="table-responsive">
									<table class="table mt-4 table-centered">
										<thead>
											<tr>
												<th>#</th>
												<th>Producto</th>
												<th style="width: 10%">Horas</th>
												<th style="width: 10%">Tarifa Horas</th>
												<th style="width: 10%" class="text-right">Total</th>
											</tr>
										</thead>
										<tbody>
											<tr
												v-for="(item, index) of invoiceDetail.items"
												:key="`item-${index}`"
											>
												<td>{{ index + 1 }}</td>
												<td>
													<h5 class="font-size-16 mt-0 mb-2">{{
														item.name
													}}</h5>
													<p class="text-muted mb-0">
														{{ item.description }}
													</p>
												</td>
												<td>{{ item.qty }}</td>
												<td>{{ item.unit_cost }}</td>
												<td class="text-right">{{ item.total }}</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!-- end table-responsive -->
							</div>
							<!-- end col -->
						</div>
						<!-- end row -->

						<div class="row">
							<div class="col-sm-6">
								<div class="clearfix pt-5">
									<h6 class="text-muted">Notes:</h6>

									<small class="text-muted">
										{{ invoiceDetail.notes }}
									</small>
								</div>
							</div>
							<!-- end col -->
							<div class="col-sm-6">
								<div class="float-right mt-4">
									<p>
										<span class="font-weight-medium">Sub-total:</span>
										<span class="float-right">{{
											invoiceDetail.sub_total
										}}</span>
									</p>
									<p>
										<span class="font-weight-medium">Descuento (10%):</span>
										<span class="float-right"
											>&nbsp;&nbsp;&nbsp; {{ invoiceDetail.discount }}</span
										>
									</p>
									<h3>{{ invoiceDetail.total }} RD</h3>
								</div>
								<div class="clearfix"></div>
							</div>
							<!-- end col -->
						</div>
						<!-- end row -->

						<div class="mt-5 mb-1">
							<div class="text-right d-print-none">
								<a href="javascript:window.print()" class="btn btn-primary">
									<i class="uil uil-print mr-1"></i> Imprimir
								</a>
								<a href="javascript: void(0);" class="btn btn-info ml-1"
									>Enviar</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end col -->
		</div>
		<!-- end row -->
		<!-- end row -->
	</Layout>
</template>
