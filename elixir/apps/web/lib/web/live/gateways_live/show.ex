defmodule Web.GatewaysLive.Show do
  use Web, :live_view

  alias Domain.Gateways
  alias Domain.Resources

  def mount(%{"id" => id} = _params, _session, socket) do
    {:ok, gateway} = Gateways.fetch_gateway_by_id(id, socket.assigns.subject, preload: :group)
    {:ok, resources} = Resources.list_resources_for_gateway(gateway, socket.assigns.subject)
    {:ok, assign(socket, gateway: gateway, resources: resources)}
  end

  def render(assigns) do
    ~H"""
    <.breadcrumbs home_path={~p"/#{@account}/dashboard"}>
      <.breadcrumb path={~p"/#{@account}/gateways"}>Gateways</.breadcrumb>
      <.breadcrumb path={~p"/#{@account}/gateways/#{@gateway}"}>
        <%= @gateway.name_suffix %>
      </.breadcrumb>
    </.breadcrumbs>
    <.header>
      <:title>
        Gateway: <code><%= @gateway.name_suffix %></code>
      </:title>
    </.header>
    <!-- Gateway details -->
    <div class="bg-white dark:bg-gray-800 overflow-hidden">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Instance Group Name
            </th>
            <td class="px-6 py-4">
              <.badge type="info">
                <%= @gateway.group.name_prefix %>
              </.badge>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Instance Name
            </th>
            <td class="px-6 py-4">
              <%= @gateway.name_suffix %>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Connectivity
            </th>
            <td class="px-6 py-4">
              TODO: Peer to Peer
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Status
            </th>
            <td class="px-6 py-4">
              <.badge type="success">
                TODO: Online
              </.badge>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Location
            </th>
            <td class="px-6 py-4">
              <code>
                <%= @gateway.last_seen_remote_ip %>
              </code>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Last seen
            </th>
            <td class="px-6 py-4">
              <.relative_datetime datetime={@gateway.last_seen_at} />
              <br />
              <%= @gateway.last_seen_at %>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Remote IPv4
            </th>
            <td class="px-6 py-4">
              <code><%= @gateway.ipv4 %></code>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Remote IPv6
            </th>
            <td class="px-6 py-4">
              <code><%= @gateway.ipv6 %></code>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Transfer
            </th>
            <td class="px-6 py-4">
              TODO: 4.43 GB up, 1.23 GB down
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Gateway version
            </th>
            <td class="px-6 py-4">
              <%= "Gateway Version: #{@gateway.last_seen_version}" %>
              <br />

              <%= "User Agent: #{@gateway.last_seen_user_agent}" %>
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="text-right px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Deployment method
            </th>
            <td class="px-6 py-4">
              TODO: Docker
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Linked Resources table -->
    <div class="grid grid-cols-1 p-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
      <div class="col-span-full mb-4 xl:mb-2">
        <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          Linked Resources
        </h1>
      </div>
    </div>
    <div class="relative overflow-x-auto">
      <.table id="resources" rows={@resources}>
        <:col :let={resource} label="NAME">
          <.link
            navigate={~p"/#{@account}/resources/#{resource.id}"}
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            <%= resource.name %>
          </.link>
        </:col>
        <:col :let={resource} label="ADDRESS">
          <%= resource.address %>
        </:col>
      </.table>
    </div>

    <.header>
      <:title>
        Danger zone
      </:title>
      <:actions>
        <.delete_button>
          Delete Gateway
        </.delete_button>
      </:actions>
    </.header>
    """
  end
end
