defmodule Web.CoreComponents do
  @moduledoc """
  Provides core UI components.

  The components in this module use Tailwind CSS, a utility-first CSS framework.
  See the [Tailwind CSS documentation](https://tailwindcss.com) to learn how to
  customize the generated components in this module.

  Icons are provided by [heroicons](https://heroicons.com), using the
  [heroicons_elixir](https://github.com/mveytsman/heroicons_elixir) project.
  """
  use Phoenix.Component
  use Web, :verified_routes
  alias Phoenix.LiveView.JS

  def logo(assigns) do
    ~H"""
    <a
      href="https://www.firezone.dev/?utm_source=product"
      class="flex items-center mb-6 text-2xl font-semibold"
    >
      <img src={~p"/images/logo.svg"} class="mr-3 h-8" alt="Firezone Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        firezone
      </span>
    </a>
    """
  end

  @doc """
  Renders a generic <p> tag using our color scheme.

  ## Examples

    <.p>
      Hello world
    </.p>
  """
  def p(assigns) do
    ~H"""
    <p class="text-gray-700 dark:text-gray-300"><%= render_slot(@inner_block) %></p>
    """
  end

  @doc """
  Render a monospace code block suitable for copying and pasting content.

  ## Examples

  <.code_block>
    The lazy brown fox jumped over the quick dog.
  </.code_block>
  """
  def code_block(assigns) do
    ~H"""
    <pre class="p-4 overflow-x-auto bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg">
      <code class="whitespace-pre-line"><%= render_slot(@inner_block) %></code>
    </pre>
    """
  end

  @doc """
  Render a tabs toggle container and its content.

  ## Examples

  <.tabs id={"hello-world"}>
    <:tab id={"hello"} label={"Hello"}>
      <p>Hello</p>
    </:tab>
    <:tab id={"world"} label={"World"}>
      <p>World</p>
    </:tab>
  </.tabs>
  """

  attr :id, :string, required: true, doc: "ID of the tabs container"

  slot :tab, required: true, doc: "Tab content" do
    attr :id, :string, required: true, doc: "ID of the tab"
    attr :label, :any, required: true, doc: "Display label for the tab"
  end

  def tabs(assigns) do
    ~H"""
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id={"#{@id}-ul"}
        data-tabs-toggle={"##{@id}"}
        role="tablist"
      >
        <%= for tab <- @tab do %>
          <li class="mr-2" role="presentation">
            <button
              class={~w[
                inline-block p-4 border-b-2 border-transparent rounded-t-lg
                hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300
              ]}
              id={"#{tab.id}-tab"}
              data-tabs-target={"##{tab.id}"}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected="false"
            >
              <%= tab.label %>
            </button>
          </li>
        <% end %>
      </ul>
    </div>
    <div id={@id}>
      <%= for tab <- @tab do %>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id={tab.id}
          role="tabpanel"
          aria-labelledby={"#{tab.id}-tab"}
        >
          <%= render_slot(tab) %>
        </div>
      <% end %>
    </div>
    """
  end

  @doc """
  Render a section header. Section headers are used in the main content section
  to provide a title for the content and option actions button(s) aligned on the right.

  ## Examples

    <.section>
      <:title>
        All gateways
      </:title>
      <:actions>
        <.add_button navigate={~p"/gateways/new"}>
          Deploy gateway
        </.add_button>
      </:actions>
    </.section>
  """
  slot :title, required: true, doc: "Title of the section"
  slot :actions, required: false, doc: "Buttons or other action elements"

  def header(assigns) do
    ~H"""
    <div class="grid grid-cols-1 p-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
      <div class="col-span-full mb-4 xl:mb-2">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
            <%= render_slot(@title) %>
          </h1>
          <%= render_slot(@actions) %>
        </div>
      </div>
    </div>
    """
  end

  @doc """
  Renders a paginator bar.

  ## Examples

    <.paginator
      page={5}
      total_pages={100}
      collection_base_path={~p"/actors"}/>
  """
  attr :page, :integer, required: true, doc: "Current page"
  attr :total_pages, :integer, required: true, doc: "Total number of pages"
  attr :collection_base_path, :string, required: true, doc: "Base path for collection"

  def paginator(assigns) do
    # XXX: Stubbing out this pagination helper for now, but we probably won't have users that
    # need this at launch.
    ~H"""
    <nav
      class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
      aria-label="Table navigation"
    >
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
        of <span class="font-semibold text-gray-900 dark:text-white">1000</span>
      </span>
      <ul class="inline-flex items-stretch -space-x-px">
        <li>
          <a href="#" class={~w[
              flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg
              border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
              dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ]}>
            <span class="sr-only">Previous</span>
            <.icon name="hero-chevron-left" class="w-5 h-5" />
          </a>
        </li>
        <li>
          <a href="#" class={~w[
              flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border
              border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
              dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ]}>
            1
          </a>
        </li>
        <li>
          <a href="#" class={~w[
              flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white
              border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
              dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ]}>
            2
          </a>
        </li>
        <li>
          <a href="#" aria-current="page" class={~w[
              flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50
              border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700
              dark:bg-gray-700 dark:text-white
            ]}>
            <%= @page %>
          </a>
        </li>
        <li>
          <a href="#" class={~w[
              flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white
              border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
              dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ]}>
            ...
          </a>
        </li>
        <li>
          <a href="#" class={~w[
              flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white
              border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
              dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ]}>
            <%= @total_pages %>
          </a>
        </li>
        <li>
          <a href="#" class={~w[
              flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg
              border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
              dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ]}>
            <span class="sr-only">Next</span>
            <.icon name="hero-chevron-right" class="w-5 h-5" />
          </a>
        </li>
      </ul>
    </nav>
    """
  end

  @doc """
  Renders flash notices.

  ## Examples

      <.flash kind={:info} flash={@flash} />
      <.flash kind={:info} phx-mounted={show("#flash")}>Welcome Back!</.flash>
  """
  attr :id, :string, default: "flash", doc: "the optional id of flash container"
  attr :flash, :map, default: %{}, doc: "the map of flash messages to display"
  attr :title, :string, default: nil
  attr :kind, :atom, values: [:info, :error], doc: "used for styling and flash lookup"
  attr :rest, :global, doc: "the arbitrary HTML attributes to add to the flash container"

  slot :inner_block, doc: "the optional inner block that renders the flash message"

  def flash(assigns) do
    ~H"""
    <div
      :if={msg = render_slot(@inner_block) || Phoenix.Flash.get(@flash, @kind)}
      id={@id}
      class={[
        "p-4 mb-4 text-sm rounded-lg flash-#{@kind}",
        @kind == :info && "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
        @kind == :error && "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400"
      ]}
      role="alert"
      {@rest}
    >
      <p :if={@title} class="flex items-center gap-1.5 text-sm font-semibold leading-6">
        <.icon :if={@kind == :info} name="hero-information-circle-mini" class="h-4 w-4" />
        <.icon :if={@kind == :error} name="hero-exclamation-circle-mini" class="h-4 w-4" />
        <%= @title %>
      </p>
      <%= msg %>
    </div>
    """
  end

  @doc """
  Shows the flash group with standard titles and content.

  ## Examples

      <.flash_group flash={@flash} />
  """
  attr :flash, :map, required: true, doc: "the map of flash messages"

  def flash_group(assigns) do
    ~H"""
    <.flash kind={:info} title="Success!" flash={@flash} />
    <.flash kind={:error} title="Error!" flash={@flash} />
    <.flash
      id="disconnected"
      kind={:error}
      title="We can't find the internet"
      phx-disconnected={show("#disconnected")}
      phx-connected={hide("#disconnected")}
      hidden
    >
      Attempting to reconnect <.icon name="hero-arrow-path" class="ml-1 h-3 w-3 animate-spin" />
    </.flash>
    """
  end

  @doc """
  Renders a standard form label.
  """
  attr :for, :string, default: nil
  slot :inner_block, required: true

  def label(assigns) do
    ~H"""
    <label for={@for} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <%= render_slot(@inner_block) %>
    </label>
    """
  end

  @doc """
  Generates a generic error message.
  """
  slot :inner_block, required: true

  def error(assigns) do
    ~H"""
    <p class="mt-3 flex gap-3 text-sm leading-6 text-rose-600 phx-no-feedback:hidden">
      <.icon name="hero-exclamation-circle-mini" class="mt-0.5 h-5 w-5 flex-none" />
      <%= render_slot(@inner_block) %>
    </p>
    """
  end

  @doc """
  Renders a data list.

  ## Examples

      <.list>
        <:item title="Title"><%= @post.title %></:item>
        <:item title="Views"><%= @post.views %></:item>
      </.list>
  """
  slot :item, required: true do
    attr :title, :string, required: true
  end

  def list(assigns) do
    ~H"""
    <div class="mt-14">
      <dl class="-my-4 divide-y divide-zinc-100">
        <div :for={item <- @item} class="flex gap-4 py-4 text-sm leading-6 sm:gap-8">
          <dt class="w-1/4 flex-none text-zinc-500"><%= item.title %></dt>
          <dd class="text-zinc-700"><%= render_slot(item) %></dd>
        </div>
      </dl>
    </div>
    """
  end

  @doc """
  Renders a [Hero Icon](https://heroicons.com).

  Hero icons come in three styles – outline, solid, and mini.
  By default, the outline style is used, but solid an mini may
  be applied by using the `-solid` and `-mini` suffix.

  You can customize the size and colors of the icons by setting
  width, height, and background color classes.

  Icons are extracted from your `assets/vendor/heroicons` directory and bundled
  within your compiled app.css by the plugin in your `assets/tailwind.config.js`.

  ## Examples

      <.icon name="hero-x-mark-solid" />
      <.icon name="hero-arrow-path" class="ml-1 w-3 h-3 animate-spin" />
  """
  attr :name, :string, required: true
  attr :class, :string, default: nil

  def icon(%{name: "hero-" <> _} = assigns) do
    ~H"""
    <span class={[@name, @class]} />
    """
  end

  @doc """
  Renders Gravatar img tag.
  """
  attr :email, :string, required: true
  attr :size, :integer, default: 40
  attr :rest, :global, doc: "the arbitrary HTML attributes to add to the flash container"

  def gravatar(assigns) do
    ~H"""
    <img
      src={"https://www.gravatar.com/avatar/#{Base.encode16(:crypto.hash(:md5, @email), case: :lower)}?s=#{@size}&d=retro"}
      {@rest}
    />
    """
  end

  @doc """
  Intersperses separator slot between a list of items.

  Useful when you need to add a separator between items such as when
  rendering breadcrumbs for navigation. Provides each item to the
  inner block.

  ## Examples

  ```heex
  <.intersperse :let={item}>
    <:separator>
      <span class="sep">|</span>
    </:separator>

    <:item>
      home
    </:item>

    <:item>
      profile
    </:item>

    <:item>
      settings
    </:item>
  </.intersperse>
  ```

  Renders the following markup:

      home <span class="sep">|</span> profile <span class="sep">|</span> settings
  """
  slot :separator, required: true, doc: "the slot for the separator"
  slot :item, required: true, doc: "the slots to intersperse with separators"

  def intersperse_blocks(assigns) do
    ~H"""
    <%= for item <- Enum.intersperse(@item, :separator) do %>
      <%= if item == :separator do %>
        <%= render_slot(@separator) %>
      <% else %>
        <%= render_slot(item) %>
      <% end %>
    <% end %>
    """
  end

  def status_page_widget(assigns) do
    ~H"""
    <div class="absolute bottom-0 left-0 justify-left p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
      <.link href="https://firezone.statuspage.io" class="text-xs hover:underline">
        <span id="status-page-widget" phx-update="ignore" phx-hook="StatusPage" />
      </.link>
    </div>
    """
  end

  attr :type, :string, default: "default"
  slot :inner_block, required: true

  def badge(assigns) do
    colors = %{
      "success" => "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "danger" => "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      "warning" => "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      "info" => "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "default" => "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }

    assigns = assign(assigns, colors: colors)

    ~H"""
    <span class={"text-xs font-medium mr-2 px-2.5 py-0.5 rounded #{@colors[@type]}"}>
      <%= render_slot(@inner_block) %>
    </span>
    """
  end

  @doc """
  Renders datetime field in a format that is suitable for the user's locale.
  """
  attr :datetime, DateTime, required: true
  attr :format, :atom, default: :short

  def datetime(assigns) do
    ~H"""
    <span title={@datetime}>
      <%= Cldr.DateTime.to_string!(@datetime, Web.CLDR, format: @format) %>
    </span>
    """
  end

  @doc """
  Returns a string the represents a relative time for a given Datetime
  from the current time or a given base time
  """
  attr :datetime, DateTime, required: true
  attr :relative_to, DateTime, required: false

  def relative_datetime(assigns) do
    assigns = assign_new(assigns, :relative_to, fn -> DateTime.utc_now() end)

    ~H"""
    <span title={@datetime}>
      <%= Cldr.DateTime.Relative.to_string(@datetime, Web.CLDR, relative_to: @relative_to) %>
    </span>
    """
  end

  @doc """
  Renders username
  """
  attr :schema, :map, required: true

  def owner(assigns) do
    case assigns.schema.created_by do
      :system ->
        ~H"""
        <span>
          System
        </span>
        """

      :identity ->
        ~H"""
        <.link
          class="text-blue-600 hover:underline"
          navigate={~p"/#{@schema.account_id}/actors/#{@schema.created_by_identity.actor.id}"}
        >
          <%= assigns.schema.created_by_identity.actor.name %>
        </.link>
        """
    end
  end

  ## JS Commands

  def show(js \\ %JS{}, selector) do
    JS.show(js,
      to: selector,
      transition:
        {"transition-all transform ease-out duration-300",
         "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
         "opacity-100 translate-y-0 sm:scale-100"}
    )
  end

  def hide(js \\ %JS{}, selector) do
    JS.hide(js,
      to: selector,
      time: 200,
      transition:
        {"transition-all transform ease-in duration-200",
         "opacity-100 translate-y-0 sm:scale-100",
         "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}
    )
  end

  @doc """
  Translates an error message using gettext.
  """
  def translate_error({msg, opts}) do
    # When using gettext, we typically pass the strings we want
    # to translate as a static argument:
    #
    #     # Translate the number of files with plural rules
    #     dngettext("errors", "1 file", "%{count} files", count)
    #
    # However the error messages in our forms and APIs are generated
    # dynamically, so we need to translate them by calling Gettext
    # with our gettext backend as first argument. Translations are
    # available in the errors.po file (as we use the "errors" domain).
    if count = opts[:count] do
      Gettext.dngettext(Web.Gettext, "errors", msg, msg, count, opts)
    else
      Gettext.dgettext(Web.Gettext, "errors", msg, opts)
    end
  end

  @doc """
  Translates the errors for a field from a keyword list of errors.
  """
  def translate_errors(errors, field) when is_list(errors) do
    for {^field, {msg, opts}} <- errors, do: translate_error({msg, opts})
  end
end
